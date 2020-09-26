require('dotenv').config();
const jwt = require('jsonwebtoken');
const { STEEL_FIELDS, STEEL_MODEL } = require('../../models/steels');

const jwtKey = process.env.JWT_SECRET_KEY;

module.exports = {
    fetchNewSteelData: (req, res, next) => {
        req._newSteel = new STEEL_MODEL({
            [STEEL_FIELDS.CHALLAN_NO]: req.body.challanNo,
            [STEEL_FIELDS.CHALLAN_DATE]: req.body.challanDate,
            [STEEL_FIELDS.GRADE]: req.body.grade,
            [STEEL_FIELDS.SECTION]: req.body.section,
            [STEEL_FIELDS.HEAT_NO]: req.body.heatNo,
            [STEEL_FIELDS.HEAT_CODE]: req.body.heatCode,
            [STEEL_FIELDS.APPROVALS]: req.body.approvals,
            [STEEL_FIELDS.JOMINY_VALUE]: req.body.jominyValue,
            [STEEL_FIELDS.RECEIVED_QTY]: req.body.receivedQty,
            [STEEL_FIELDS.MODIFIED_ON]: Date.now()
        });

        //fetch user data here from cookies
        // const _decrypt = jwt.verify(req.cookies.refreshToken, jwtKey, function(error, result) {
        //     if(result) {
        //         return result;
        //     } else {
        //         console.log(error);
        //     };
        // });
        // //post userIds with the documents created
        // if(_decrypt) {
        //     req._newSteel.createdBy = _decrypt.userId;
        //     req._newSteel.modifiedBy = _decrypt.userId;
            next();
        // }
    },
    saveSteelData: async (req, res, next) => {
        req._savedSteelData = await req._newSteel.save()
                                                .then(result => {return {status: 200, error: null, data: result };})
                                                .catch(error => { return {status: 404, error: error, data: null }});
        next();
    },
    response: async (req, res, next) => {
        const { status, error, data } = req._savedSteelData;
        res.status(status).json({ error: error, data: data });
        next();
    }
}