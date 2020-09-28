require('dotenv').config();
const jwt = require('jsonwebtoken');
const { PART_FIELDS, PART_MODEL } = require('../../../models/parts/model');

const jwtKey = process.env.JWT_SECRET_KEY;

module.exports = {
    fetchNewPartData: (req, res, next) => {
        req._newPart = new PART_MODEL({
            [PART_FIELDS.PO_NO]: req.body.poNo,
            [PART_FIELDS.PO_DATE]: req.body.poDate,
            [PART_FIELDS.ITEM_CODE]: req.body.itemCode,
            [PART_FIELDS.PART_NO]: req.body.partNo,
            [PART_FIELDS.PART_NAME]: req.body.partName,
            [PART_FIELDS.CUSTOMER_NAME]: req.body.customerName,
            [PART_FIELDS.RAW_MATERIAL]: req.body.rawMaterial,
            [PART_FIELDS.STD_WEIGHT]: req.body.stdWeight,
            [PART_FIELDS.CUT_WEIGHT]: req.body.cutWeight,
            [PART_FIELDS.MODIFIED_ON]: Date.now()
        });

        //fetch user data here from cookies
        const _decrypt = jwt.verify(req.cookies.refreshToken, jwtKey, function(error, result) {
            if(result) {
                return result;
            } else {
                console.log(error);
            };
        });
        //post userIds with the documents created
        if(_decrypt) {
            req._newPart.createdBy = _decrypt.userId;
            req._newPart.modifiedBy = _decrypt.userId;
            next();
        }
    },
    savePartData: async (req, res, next) => {
        req._savedPartData = await req._newPart.save()
                                                .then(result => {return {status: 200, error: null, data: result };})
                                                .catch(error => { return {status: 404, error: error, data: null }});
        next();
    },
    response: async (req, res, next) => {
        const { status, error, data } = req._savedPartData;
        res.status(status).json({ error: error, data: data }).end();
        next();
    }
}