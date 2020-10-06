const jwt = require('jsonwebtoken');
const { FORGING_PLAN_FIELDS, FORGING_PLAN_MODEL } = require('../../models/forgingPlan');
const { PART_MODEL } = require('../../models/parts');

const jwtKey = process.env.JWT_SECRET_KEY;

module.exports = {
    fetchPlanData: async (req, res, next) => {
        req._newPlan = new FORGING_PLAN_MODEL({
            [FORGING_PLAN_FIELDS.PLAN_DATE]: Date.now(),
            [FORGING_PLAN_FIELDS.PLANNING]: {
                [FORGING_PLAN_FIELDS.MACHINE_NAME]: req.body.machineName,
                [FORGING_PLAN_FIELDS.CONTRACTOR_NAME]: req.body.contractorName,
                [FORGING_PLAN_FIELDS.DIE_NO]: req.body.dieNo,
                [FORGING_PLAN_FIELDS.PLANNED_QTY]: req.body.plannedQty,
                [FORGING_PLAN_FIELDS.MODIFIED_ON]: Date.now()
            }
        });

        req._newPlan.partNo = await PART_MODEL.findOne({ 'partNo': req.body.partNo })
                                                .then(result => {
                                                    console.log(result);
                                                    return result;
                                                })
                                                .catch(error => {
                                                    res.status(200).json({ error: error, data:null }).end();
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
            req._newPlan.createdBy = _decrypt.userId;
            req._newPlan.modifiedBy = _decrypt.userId;
            next();
        }
    },
    saveInMongo: async (req, res, next) => {
        req._savedPlanData = await req._newPlan.save()
            .then(result => {return {status: 200, error: null, data: result };})
            .catch(error => { return {status: 404, error: error, data: null }});
        next();
    },
    response: async (req, res, next) => {
        const { status, error, data } = req._savedPlanData;
        res.status(status).json({ error: error, data: data }).end();
        next();
    }
}