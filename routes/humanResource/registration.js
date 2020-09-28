require('dotenv').config();
const jwt = require('jsonwebtoken');
const { EMP_FIELDS, EMP_MODEL } = require('../../../models/employees/model');

const jwtKey = process.env.JWT_SECRET_KEY;

module.exports = {
    fetchNewEmployeeData: async (req, res, next) => {
        req._newEmployee = new EMP_MODEL({
            [EMP_FIELDS.TITLE]: req.body.title,
            [EMP_FIELDS.EMP_ID]: req.body.newEmployeeId,
            [EMP_FIELDS.FIRST_NAME]: req.body.firstName,
            [EMP_FIELDS.MIDDLE_NAME]: req.body.middleName,
            [EMP_FIELDS.LAST_NAME]: req.body.lastName,
            [EMP_FIELDS.GENDER]: req.body.gender,
            [EMP_FIELDS.DATE_OF_BIRTH]: req.body.dob,
            [EMP_FIELDS.FATHERS_NAME]: req.body.fathersName,
            [EMP_FIELDS.MOTHERS_NAME]: req.body.mothersName,
            [EMP_FIELDS.EDUCATIONAL_QUALIFICATION]: req.body.educationalQualification,
            [EMP_FIELDS.ADDRESS]: req.body.address,
            [EMP_FIELDS.DESIGNATION]: req.body.designation,
            [EMP_FIELDS.BASIC_SALARY]: req.body.basicSalary,
            [EMP_FIELDS.JOB_TYPE]: req.body.jobType,
            [EMP_FIELDS.DEPARTMENT]: req.body.department,
            [EMP_FIELDS.ROLE]: req.body.role,
            [EMP_FIELDS.DATE_OF_JOINING]: req.body.doj,
            [EMP_FIELDS.DATE_OF_END]: req.body.doe,
            [EMP_FIELDS.MODIFIED_ON]: Date.now()
        });

        //fetch employee data from db
        req._newEmployee.reportingTo = await EMP_MODEL.findOne({ 'employeeId': req.body.reportingTo })
        .then(result => {
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
        req._newEmployee.createdBy = _decrypt.userId;
        req._newEmployee.modifiedBy = _decrypt.userId;
        
        next();
    },
    saveEmployeeData: async (req, res, next) => {
        req._savedEmployeeData = await req._newEmployee.save()
                                                .then(result => {return {status: 200, error: null, data: result };})
                                                .catch(error => { return {status: 404, error: error, data: null }});
        next();
    },
    response: async (req, res, next) => {
        const { status, error, data } = req._savedEmployeeData;
        res.status(status).json({ error: error, data: data });
    }
}