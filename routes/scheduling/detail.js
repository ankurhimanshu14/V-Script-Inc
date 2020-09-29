const { SCHEDULE_MODEL } = require('../../../models/dispatchSchedule/model');

module.exports = {
    fetchSchedule: async (req, res, next) => {
        const { month, year, ...other } = req.body;

        req._scheduleDetails = await SCHEDULE_MODEL.find({ 'month': month, 'year': year })
                                                .populate({ path: 'PartNo' })
                                                .then(result => {
                                                    if(result) {
                                                        return { status: 200, error: null, data: result }
                                                    } else {
                                                        return { status: 400, error: 'Part d', data: null }
                                                    }
                                                })
                                                .catch(err => {
                                                    return { status: 400, error: err, data: null }
                                                });
        next();
    },
    response: (req, res, next) => {
        const { status, error, data } = req._scheduleDetails;
        res.status(status).json({ error: error, data: data });
        next();
    }
}