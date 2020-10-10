require('dotenv').config();
const { ITEM_FIELDS, ITEM_MODEL } = require('../../models/items');
const { STEEL_FIELDS, STEEL_MODEL } = require('../../models/steels');
const jwt = require('jsonwebtoken');

const jwtKey = process.env.JWT_SECRET_KEY;

module.exports = {
    populateItems: async (req, res, next) => {
        req._steelsForApprovals = await ITEM_MODEL.find({
            [ITEM_FIELDS.SENT_TO_LAB]: 'false',
            [ITEM_FIELDS.ITEM_HEADER]: /steel/i
        }, 'itemCode itemDescription itemHeader quantity grNo challanNo challanDate sentToLab')
        .then(result => {
            if(result) {
                return result;
            } else {
                return {status: 200, error: null, msg: "No approvals pending"}
            }
        })
        .catch(err => {
            console.log('Error: ', err);
        })
        console.log(req._steelsForApprovals)
        next();
    },

    saveSteelDetails: async (req, res, next) => {
        req._steelsForApprovals.map(async steel => {
            req._approvedSteel = new STEEL_MODEL({
                
                [STEEL_FIELDS.GRADE]: req.body.grade,
                [STEEL_FIELDS.SECTION]: req.body.section,
                [STEEL_FIELDS.HEAT_NO]: req.body.heatNo,
                [STEEL_FIELDS.HEAT_CODE]: req.body.heatCode,
                [STEEL_FIELDS.JOMINY_VALUE]: req.body.jominyValue,
                [STEEL_FIELDS.MODIFIED_ON]: Date.now()

            })
            req._approvedSteel.grNo = steel.grNo,
            req._approvedSteel.challanNo = steel.challanNo,
            req._approvedSteel.challanDate = steel.challanDate,
            req._approvedSteel.receivedQty = steel.quantity

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
                req._approvedSteel.createdBy = _decrypt.userId;
                req._approvedSteel.modifiedBy = _decrypt.userId;
            }
            console.log(req.body.approvals)
            if(req.body.approvals) {
                req._approvedSteel.approvals.push(req.body.approvals);
                steel.updateOne({[ITEM_FIELDS.SENT_TO_LAB]: 'true'});

                req._savedSteelData = await req._approvedSteel.save()
                .then(result => {return {status: 200, error: null, data: result };})
                .catch(error => { return {status: 404, error: error, data: null }});
            
                const { status, error, data } = req._savedSteelData;
                const filter = {'grNo': data.grNo};
                const update = { 'sentToLab': true };
                await ITEM_MODEL.findOneAndUpdate(filter, update, { new: true });
            }                        
        })
        next();
    },
    response: async (req, res, next) => {
        const { status, error, data } = req._savedSteelData;
        res.status(status).json({ error: error, data: data });
        next();
    }
}