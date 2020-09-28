const mongoose = require('mongoose');
const Schema = require('../_helpers/db');

FIELDS = {
    PO_NO: 'poNo',
    PO_DATE: 'poDate',
    ITEM_CODE: 'itemCode',
    PART_NO: 'partNo',
    PART_NAME: 'partName',
    CUSTOMER_NAME: 'customerName',
    STD_WEIGHT: 'stdWeight',
    RAW_MATERIAL: 'rawMaterial',
    CUT_WEIGHT: 'cutWeight',
    CREATED_BY: 'createdBy',
    CREATED_ON: 'createdOn',
    MODIFIED_BY: 'modifiedBy',
    MODIFIED_ON: 'modifiedOn'
};

SCHEMA = {
    [FIELDS.PO_NO]: { type: Number },
    [FIELDS.PO_DATE]: { type: Date },
    [FIELDS.ITEM_CODE]: { type: String, unique: true },
    [FIELDS.PART_NO]: { type: String, unique: true },
    [FIELDS.PART_NAME]: { type: String },
    [FIELDS.CUSTOMER_NAME]: { type: String },
    [FIELDS.STD_WEIGHT]: { type: Number },
    [FIELDS.RAW_MATERIAL]: { type: String },
    [FIELDS.CUT_WEIGHT]: {type: Number },
    [FIELDS.CREATED_BY]: { type: Schema.Types.ObjectId, ref: 'User' },
    [FIELDS.CREATED_ON]: { type: Date, default: Date.now() },
    [FIELDS.MODIFIED_BY]: { type: Schema.Types.ObjectId, ref: 'User' },
    [FIELDS.MODIFIED_ON]: { type: Date },
}

const partSchema = new Schema(SCHEMA);

module.exports = {
    PART_FIELDS: FIELDS,
    PART_MODEL: mongoose.model('Part', partSchema)
}