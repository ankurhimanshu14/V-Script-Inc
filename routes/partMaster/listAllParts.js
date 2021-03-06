const { PART_MODEL } = require('../../models/parts');

module.exports = {
    fetchFromMongo: async (req, res, next) => {
        req._partDetails = await PART_MODEL.find()
                                                .then(result => {
                                                    return { status: 200, error: null, data: result }
                                                })
                                                .catch(err => {
                                                    return { status: 400, error: err, data: null }
                                                });
        next();
    },
    response: (req, res, next) => {
        const { status, error, data } = req._partDetails;
        res.status(status).json(data).end();
    }
}