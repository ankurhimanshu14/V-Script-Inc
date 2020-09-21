const Schema = require('../_helpers/db');
const mongoose = require('mongoose');

const FIELDS = {
    USERNAME: 'username',
    EMAIL: 'email',
    PASSWORD: 'password',
};

const SCHEMA = {
    [FIELDS.USERNAME]: { type: String, unique: true },
    [FIELDS.EMAIL]: { type: String },
    [FIELDS.PASSWORD]: { type: String }
};

const userSchema = Schema(SCHEMA);

module.exports = {
    USER_FIELDS: FIELDS,
    USER_MODEL: mongoose.model('User', userSchema)
};