const Schema = require('../_helpers/db');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const FIELDS = {
    EMPLOYEE_ID: 'employeeId',
    ROLE: 'role',
    USERNAME: 'username',
    EMAIL: 'email',
    PASSWORD: 'password',
    ACCEPT_TERMS: 'acceptTerms',
    AUTHORITY: 'authority'
};

const SCHEMA = {
    [FIELDS.EMPLOYEE_ID]: { type: String },
    [FIELDS.ROLE]: { Admin : { type: Boolean, default: false } },
    [FIELDS.USERNAME]: { type: String, unique: true },
    [FIELDS.EMAIL]: { type: String },
    [FIELDS.PASSWORD]: { type: String },
    [FIELDS.ACCEPT_TERMS]: { type: Boolean, default: false },
    [FIELDS.AUTHORITY]: { type: String }
};

const userSchema = Schema(SCHEMA);


userSchema.pre('save', async function(next) {
    await bcrypt.hash(this.password, 10)
    .then(hash => {
        this.password = hash;
        next();
    })
    .catch(err => {
        return next(err);
    })
});

userSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function(doc, ret) {
        delete ret._id;
        delete ret.password;
    }
});

module.exports = {
    USER_FIELDS: FIELDS,
    USER_MODEL: mongoose.model('User', userSchema)
};