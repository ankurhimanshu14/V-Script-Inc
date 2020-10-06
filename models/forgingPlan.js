const mongoose = require('mongoose');
const Schema = require('../_helpers/db');

const FIELDS = {
    PLAN_DATE: 'planDate',
    PLANNING: 'planning',
    MACHINE_NAME: 'machineName',
    CONTRACTOR_NAME: 'contractorName',
    PART_NO: 'partNo',
    DIE_NO: 'dieNo',
    PLANNED_QTY: 'plannedQty',
    CREATED_BY: 'createdBy',
    CREATED_ON: 'createdOn',
    MODIFIED_BY: 'modifiedBy',
    MODIFIED_ON: 'modifiedOn'
};

const SCHEMA = {
    [FIELDS.PLAN_DATE]: { type: Date, unique: true},
    [FIELDS.PLANNING]: {
        [FIELDS.MACHINE_NAME]: { type: String },
        [FIELDS.CONTRACTOR_NAME]: { type: Schema.Types.ObjectId, ref: 'Employee'},
        [FIELDS.PART_NO]: { type: Schema.Types.ObjectId, ref: 'Part'},
        [FIELDS.DIE_NO]: { type: String },
        [FIELDS.PLANNED_QTY]: { type: Number },
        [FIELDS.CREATED_BY]: {type: Schema.Types.ObjectId, ref: 'User'},
        [FIELDS.CREATED_ON]: { type: Date, default: Date.now() },
        [FIELDS.MODIFIED_BY]: { type: Schema.Types.ObjectId, ref: 'User'},
        [FIELDS.MODIFIED_ON]: { type: Date }
    }
};

const forgingPlanSchema = new Schema(SCHEMA);

module.exports = {
    FORGING_PLAN_FIELDS: FIELDS,
    FORGING_PLAN_MODEL: mongoose.model('Forging Plan', forgingPlanSchema)
}