const mongoose = require('mongoose');
const Schema = require('../_helpers/db');

const FIELDS = {
    CHALLAN_NO: 'challanNo',
    CHALLAN_DATE: 'challanDate',
    VEHICLE_NO: 'vehicleNo',
    PARTY_CODE: 'partyCode',
    ITEM: 'item',
    ITEM_CODE: 'itemCode',
    ITEM_DESCRIPTION: 'itemDescription',
    ITEM_HEADER: 'itemHeader',
    PO_NO: 'poNo',
    HSN_CODE: 'hsnCode',
    RECEIVING: 'receiving',
    QUANTITY: 'quantity',
    UOM: 'uom',
    TAXABLE_VALUE: 'taxableValue',
    RATE_AMOUNT: 'rate&Amount',
    CGST: 'cgst',
    SGST: 'sgst',
    IGST: 'igst',
    GRN: 'grn',
    GR_NO: 'grNo',
    GR_TIMESTAMP: 'grTimestamp',
    CREATION: 'creation',
    CREATED_BY: 'createdBy',
    CREATED_ON: 'createdOn',
    MODIFICATION: 'modification',
    MODIFIED_BY: 'modifiedBy',
    MODIFIED_ON: 'modifiedOn',
    CREATION_REMARKS: 'creationRemarks',
    MODIFICATION_REMARKS: 'modificationRemarks'
};

const SCHEMA = {
    [FIELDS.CHALLAN_NO]: { type: String },
    [FIELDS.CHALLAN_DATE]: { type: Date },
    [FIELDS.VEHICLE_NO]: { type: String },
    [FIELDS.PARTY_CODE]: { type: String },
    // [FIELDS.PARTY_CODE]: { type: Schema.Types.ObjectId, ref: 'Party' },
    [FIELDS.ITEM]: {
        [FIELDS.ITEM_CODE]: { type: String },
        [FIELDS.ITEM_DESCRIPTION]: { type: String },
        [FIELDS.ITEM_HEADER]: { type: String }
    },
    [FIELDS.PO_NO]: { tpye: String, default: 0 },
    [FIELDS.HSN_CODE]: { type: String },
    [FIELDS.RECEIVING]: {
        [FIELDS.QUANTITY]: { type: Number },
        [FIELDS.UOM]: { type: String }
    },
    [FIELDS.TAXABLE_VALUE]: { amount: {type: Number}, currency: { type: String, default: 'INR' } },
    [FIELDS.RATE_AMOUNT]: {
        [FIELDS.CGST]: { type: Number },
        [FIELDS.SGST]: { type: Number },
        [FIELDS.IGST]: { type: Number }
    },
    [FIELDS.GRN]: {
        [FIELDS.GR_NO]: { type: Number },
        [FIELDS.GR_TIMESTAMP]: { type: Date, default: Date.now() },
        [FIELDS.CREATED_BY]: {type: Schema.Types.String, ref: 'User' },
        [FIELDS.CREATION_REMARKS]: { type: String }
    },
    [FIELDS.MODIFICATION]: {
        [FIELDS.MODIFIED_BY]: { type: Schema.Types.ObjectId, ref: 'User' },
        [FIELDS.MODIFIED_ON]: { type: Date },
        [FIELDS.MODIFICATION_REMARKS]: { type: String }
    }
};

const itemSchema = new Schema(SCHEMA);

module.exports = {
    ITEM_FIELDS: FIELDS,
    ITEM_MODEL: mongoose.model('Item', itemSchema)
}