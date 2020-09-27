const mongoose = require('mongoose');
const Schema = require('../_helpers/db');

const FIELDS = {
    GR_NO: 'grNo',
    CHALLAN_NO: 'challanNo',
    CHALLAN_DATE: 'challanDate',
    GRADE: 'grade',
    SECTION: 'section',
    HEAT_NO: 'heatNo',
    HEAT_CODE: 'heatCode',
    JOMINY_VALUE: 'jominyValue',
    APPROVALS: 'approvals',
    RECEIVED_QTY: 'receivedQty',
    AVAILABLE_QTY: 'availableQty',
    HEAT_STATUS: 'heatStatus',
    CREATED_BY: 'createdBy',
    CREATED_ON: 'createdOn',
    MODIFIED_BY: 'modifiedBy',
    MODIFIED_ON: 'modifiedOn'
};

const SCHEMA = {
    [FIELDS.GR_NO]: { type: Number, unique: true },
    [FIELDS.CHALLAN_NO]: { type: String },
    [FIELDS.CHALLAN_DATE]: { type: Date },
    [FIELDS.GRADE]: { type: String },
    [FIELDS.SECTION]: { type: String },
    [FIELDS.HEAT_NO]: { type: [String] },
    [FIELDS.HEAT_CODE]: { type: String },
    [FIELDS.JOMINY_VALUE]: { type: String },
    [FIELDS.APPROVALS]: {type: [String] },
    [FIELDS.RECEIVED_QTY]: { type: Number},
    [FIELDS.AVAILABLE_QTY]: { type: Number, default: function () {
        return this[FIELDS.RECEIVED_QTY];
    } },
    [FIELDS.HEAT_STATUS]: { type: Boolean, default: true },
    [FIELDS.CREATED_BY]: { type: Schema.Types.String, ref: 'User' },
    [FIELDS.CREATED_ON]: { type: Date, default: Date.now },
    [FIELDS.MODIFIED_BY]: { type: Schema.Types.ObjectId, ref: 'User' },
    [FIELDS.MODIFIED_ON]: { type: Date }
};

const steelSchema = new Schema(SCHEMA);

steelSchema.pre('save', async function(next) {
    this.availableQty = this.receivedQty;
    this.grNo = Date.now();
    next();
});

steelSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function(doc, ret) {
        delete ret._id;
    }
});


module.exports = {
    STEEL_FIELDS: FIELDS,
    STEEL_MODEL: mongoose.model('Steel', steelSchema)
}