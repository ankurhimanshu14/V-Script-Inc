const { ITEM_FIELDS, SCHEDULE_FIELDS, ITEM_MODEL, SCHEDULE_MODEL } = require('../../models/schedule');
const { PART_MODEL } = require('../../models/parts');

module.exports = {
    checkScheduleExists: async (req, res, next) => {
        const { month, year, ...other } = req.body;
        req._schedule = await SCHEDULE_MODEL.findOne({ 'month': month, 'year': '2020' })
                                            .then(result => {
                                                if(result === null) {
                                                    return new SCHEDULE_MODEL({ modifiedOn: Date.now() });
                                                } else{
                                                    return result;
                                                }
                                            })
                                            .catch(err => console.log(err));
        next();
    },
    fetchScheduleItems: async (req, res, next) => {
        const partNo = await PART_MODEL.findOne({ 'partNo': req.body.partNo })
                                        .then(result => {
                                            return result;
                                        })
                                        .catch(err => {
                                            console.log('Part not found.');
                                        });
        _scheduleItems = {
            [ITEM_FIELDS.PART_NO]: partNo,
            [ITEM_FIELDS.MOST_CRITICAL_QTY]: req.body.mostCriticalQty,
            [ITEM_FIELDS.CRITICAL_QTY]: req.body.criticalQty,
            [ITEM_FIELDS.MAIN_QTY]: req.body.mainQty,
            [ITEM_FIELDS.REVISED_QTY]: req.body.revisedQty,
            [ITEM_FIELDS.RECEIVED_TILL_DATE]: req.body.receivedQty
        };

        req._schedule.scheduleItems.push(_scheduleItems);
        req._schedule.save();
        next();
    },
    response: (req, res, next) => {
        res.status(200).json({ msg: 'Schedule Item added to the schedule'}).end();
        next();
    }
}