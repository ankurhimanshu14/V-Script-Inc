const { EMP_FIELDS, EMP_MODEL } = require('../../../models/employees/model');

module.exports = {
    fetchFromMongo: async (req, res, next) => {
        req._employeeDetails = await EMP_MODEL.find()
                                                .then(result => {
                                                    return { status: 200, error: null, data: result }
                                                })
                                                .catch(err => {
                                                    return { status: 400, error: err, data: null }
                                                });
        next();
    },
    response: (req, res, next) => {
        const { status, error, data } = req._employeeDetails;
        res.status(status).json({error: error, data: data }).end();
    }
}