const Schema = require('../_helpers/db');
const mongoose = require('mongoose');

const ITEM_FIELDS = {
    PART_NO: 'partNo',
    MOST_CRITICAL_QTY: 'mostCriticalQty',
    CRITICAL_QTY: 'criticalQty',
    MAIN_QTY: 'mainQty',
    REVISED_QTY: 'revisedQty',
    RECEIVED_TILL_DATE: 'receivedTillDate',
    BALANCE_QTY: 'balanceQty'
};

const ITEM_SCHEMA = {
    [ITEM_FIELDS.PART_NO]: { type: Schema.Types.ObjectId, ref: 'Part' },
    [ITEM_FIELDS.MOST_CRITICAL_QTY]: { quantity: {type: Number, default: 0}, commitmentDate: { type: Date } },
    [ITEM_FIELDS.CRITICAL_QTY]: { quantity: {type: Number, default: 0}, commitmentDate: { type: Date } },
    [ITEM_FIELDS.MAIN_QTY]: { quantity: {type: Number, default: 0}, commitmentDate: { type: Date } },
    [ITEM_FIELDS.REVISED_QTY]: { quantity: {type: Number, default: 0}, commitmentDate: { type: Date } },
    [ITEM_FIELDS.RECEIVED_TILL_DATE]: {type: Number, default: 0},
    [ITEM_FIELDS.BALANCE_QTY]: { type: Number, default: function() {
        return this[ITEM_FIELDS.MAIN_QTY].quantity + this[ITEM_FIELDS.REVISED_QTY].quantity - this[ITEM_FIELDS.RECEIVED_TILL_DATE];
    } }
};

const itemSchema = new Schema(ITEM_SCHEMA);

const SCHEDULE_FIELDS = {
    MONTH: 'month',
    YEAR: 'year',
    CREATED_BY: 'createdBy',
    CREATED_ON: 'createdOn',
    MODIFIED_BY: 'modifiedBy',
    MODIFIED_ON: 'modifiedOn',
    SCHEDULE_ITEMS: 'scheduleItems'
};

const SCHEDULE_SCHEMA = {
    [SCHEDULE_FIELDS.MONTH]: { type: Number, default: () => { return (new Date()).getMonth()} },
    [SCHEDULE_FIELDS.YEAR]: { type: Number, default: () => { return (new Date()).getFullYear()} },
    [SCHEDULE_FIELDS.CREATED_BY]: { type: Schema.Types.ObjectId, ref: 'User' },
    [SCHEDULE_FIELDS.CREATED_ON]: { type: Date, default: Date.now },
    [SCHEDULE_FIELDS.MODIFIED_BY]: { type: Schema.Types.ObjectId, ref: 'User' },
    [SCHEDULE_FIELDS.MODIFIED_ON]: { type: Date },
    [SCHEDULE_FIELDS.SCHEDULE_ITEMS]: [itemSchema]
};

const scheduleSchema = new Schema(SCHEDULE_SCHEMA);

module.exports = {
    ITEM_FIELDS: ITEM_FIELDS,
    SCHEDULE_FIELDS: SCHEDULE_FIELDS,
    ITEM_MODEL: mongoose.model('Item', itemSchema),
    SCHEDULE_MODEL: mongoose.model('Schedule', scheduleSchema)
}