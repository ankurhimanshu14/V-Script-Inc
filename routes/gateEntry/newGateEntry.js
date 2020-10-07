require('dotenv').config();
const { ITEM_FIELDS, ITEM_MODEL } = require('../../models/items');
const jwt = require('jsonwebtoken');

const jwtKey = process.env.JWT_SECRET_KEY;

module.exports = {

    fetchNewItemData: (req, res, next) => {
        
        req._newItem = new ITEM_MODEL({
            [ITEM_FIELDS.CHALLAN_NO]: req.body.challanNo,
            [ITEM_FIELDS.CHALLAN_DATE]: req.body.challanDate,
            [ITEM_FIELDS.VEHICLE_NO]: req.body.vehicleNo,
            [ITEM_FIELDS.PARTY_CODE]: req.body.partyCode,
            [ITEM_FIELDS.ITEM]: {
                [ITEM_FIELDS.ITEM_CODE]: req.body.item.itemCode,
                [ITEM_FIELDS.ITEM_DESCRIPTION]: req.body.item.itemDescription,
                [ITEM_FIELDS.ITEM_HEADER]: req.body.item.itemHeader
            },
            [ITEM_FIELDS.PO_NO]: req.body.poNo,
            [ITEM_FIELDS.HSN_CODE]: req.body.hsnCode,
            [ITEM_FIELDS.RECEIVING]: {
                [ITEM_FIELDS.QUANTITY]:req.body.receiving.quantity,
                [ITEM_FIELDS.UOM]: req.body.receiving.uom
            },
            [ITEM_FIELDS.TAXABLE_VALUE]: req.body.taxableValue,
            [ITEM_FIELDS.RATE_AMOUNT]: {
                [ITEM_FIELDS.CGST]: req.body.cgst,
                [ITEM_FIELDS.SGST]: req.body.sgst,
                [ITEM_FIELDS.IGST]: req.body.igst
            },
            [ITEM_FIELDS.GRN]: {
                [ITEM_FIELDS.GR_NO]: req.body.grn.grNo,

                [ITEM_FIELDS.CREATION_REMARKS]: req.body.creationRemarks
            }
        });

        // fetch user data here from cookies
        const _decrypt = jwt.verify(req.cookies.refreshToken, jwtKey, function(error, result) {
            if(result) {
                return result;
            } else {
                console.log(error);
            };
        });
        //post userIds with the documents created
        if(_decrypt) {
            req._newItem.grn.createdBy = _decrypt.userId;
            req._newItem.modification.modifiedBy = _decrypt.userId;
            next();
        }
    },
    saveItemData: async (req, res, next) => {
        req._savedItemData = await req._newItem.save()
                                                .then(result => {return {status: 200, error: null, data: result };})
                                                .catch(error => { return {status: 404, error: error, data: null }});

        next();
    },
    response: async (req, res, next) => {
        const { status, error, data } = req._savedItemData;
        res.status(status).json({ error: error, data: data });
        next();
    }
}