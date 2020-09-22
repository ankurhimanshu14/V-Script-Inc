const Schema = require('../_helpers/db');
const mongoose = require('mongoose');

const FIELDS = {
    EMPLOYEE_ID: 'employeeId',
    ROLE: 'role',
    USERNAME: 'username',
    EMAIL: 'email',
    PASSWORD: 'password',
    ACCEPT_TERMS: 'acceptTerms'
};

const SCHEMA = {
    [FIELDS.EMPLOYEE_ID]: { type: String },
    [FIELDS.ROLE]: { Admin : { type: Boolean, default: false } },
    [FIELDS.USERNAME]: { type: String, unique: true },
    [FIELDS.EMAIL]: { type: String },
    [FIELDS.PASSWORD]: { type: String },
    [FIELDS.ACCEPT_TERMS]: { type: Boolean, default: false }
};

const userSchema = Schema(SCHEMA);

module.exports = {
    USER_FIELDS: FIELDS,
    USER_MODEL: mongoose.model('User', userSchema)
};