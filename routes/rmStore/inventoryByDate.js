const { STEEL_MODEL } = require('../../models/steels');
const Moment = require('moment');

module.exports = {
    getDates: (req, res, next) => {
        req._duration = {
            _startDate: Moment(req.body.startDate).format('YYYY-MM-DD'),
            _endDate: Moment(req.body.endDate).format('YYYY-MM-DD')
        };
        next();
    },
    searchInMongo: async (req, res, next) => {

        req._inventory = await STEEL_MODEL.find({
            $and: [
                {
                    challanDate: {
                        $gte: req._duration._startDate,
                        $lt: req._duration._endDate
                    }
                },
                {
                    heatStatus: {
                        $eq: true
                    }
                }
            ]

        }).sort({ challanDate: 'asc'})
        .then(result => {
            return {status: 200, error: null, data: result};
        })
        .catch(err => {
            return { status: 404, error: "Error: "+err, data: null};
        })
        next();
    },

    response: (req, res, next) => {
        const {error, data, msg } = req._inventory;
        console.log(data);
        res.json(data).end();
        next();
    }
}