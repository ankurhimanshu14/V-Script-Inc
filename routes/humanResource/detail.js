const { EMP_MODEL } = require('../../../models/employees/model');

module.exports = {
    fetchEmployeeId: (req, res, next) => {
        req._employeeId = req.headers.employeeid;
        next();
    },
    searchInMongo: async (req, res, next) => {
        req._employeeDetails = await EMP_MODEL.findOne({ 'employeeId': req._employeeId })
                                                .populate({ path: 'reportingTo' })
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
        res.status(status).json({ error: error, data: data });
    }
}