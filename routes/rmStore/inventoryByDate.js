const { STEEL_MODEL } = require('../../models/steels');

module.exports = {
    getDates: (req, res, next) => {

        req._duration = {
            _startDate: req.body.startDate,
            _endDate: req.body.endDate
        };
        next();
    },
    searchInMongo: async (req, res, next) => {

        req._inventory = await STEEL_MODEL.find({
            $and: [
                {
                    challanDate: {
                        $gte: new Date(new Date(req._duration._startDate).setHours(5, 30, 00)),
                        $lt: new Date(new Date(req._duration._endDate).setHours(29, 29, 59))
                    }
                },
                {
                    heatStatus: {
                        $eq: true
                    }
                }
            ]

        }, 'grade section heatNo heatCode availableQty heatStatus').sort({ challanDate: 'asc'})
        .then(result => {
            return result;
        })
        .catch(err => {
            res.status(404).json({ error: err, data: null, msg: "Couldn't retrieve inventory" }).end();
        })
        next();
    },
    response: (req, res, next) => {
        if(req._inventory) {
            const { _id, ...other } = req._inventory;
            res.status(200).json({ error: null, data: other, msg: 'Success' }).end();
            next();
        } else {
            res.status(404).end();
        }

    }

}