const { USER_FIELDS, USER_MODEL } = require('../../models/users');
module.exports = {
    fetchUserData: (req, res, next) => {
        req._newUser = new USER_MODEL({
            [USER_FIELDS.EMPLOYEE_ID]: req.body.employeeId,
            [USER_FIELDS.USERNAME]: req.body.username,
            [USER_FIELDS.EMAIL]: req.body.email,
            [USER_FIELDS.PASSWORD]: req.body.password,
            [USER_FIELDS.ROLE]: req.body.role,
            [USER_FIELDS.AUTHORITY]: req.body.authority,
            [USER_FIELDS.ACCEPT_TERMS]: req.body.acceptTerms
        });

        next();
    },
    saveToMongo: async (req, res, next) => {
        req._savedUser = await req._newUser.save()
        .then(user => {return {status: 200, error: null, data: user };})
        .catch(error => { return {status: 404, error: error, data: null };});

        next();
    },
    response: async (req, res, next) => {
        const { status, error, data } = req._savedUser;
        res.status(status).json({error, data}).end();

        next();
    }
}