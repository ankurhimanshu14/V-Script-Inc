const { ITEM_MODEL } = require('../../models/items');

module.exports = {
    fetchFromMongo: async (req, res, next) => {
        req._itemDetails = await ITEM_MODEL.find()
                                                .then(result => {
                                                    return { status: 200, error: null, data: result }
                                                })
                                                .catch(err => {
                                                    return { status: 400, error: err, data: null }
                                                });
        next();
    },
    response: (req, res, next) => {
        const { status, error, data } = req._itemDetails;
        res.status(status).json(data).end();
    }
}