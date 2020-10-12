require('dotenv').config();
const { ITEM_FIELDS, ITEM_MODEL } = require('../../models/items');
const { STEEL_FIELDS, STEEL_MODEL } = require('../../models/steels');
const jwt = require('jsonwebtoken');

const jwtKey = process.env.JWT_SECRET_KEY;

module.exports = {
    populateItems: async (req, res, next) => {
        req._steelsForApprovals = await ITEM_MODEL.find({
                [ITEM_FIELDS.SENT_TO_LAB]: 'false',
                [ITEM_FIELDS.ITEM_HEADER]: /steel/i
            }, 'itemCode itemDescription itemHeader quantity grNo challanNo challanDate sentToLab')
                                            .then(result => {
                                                return { status: 200, error: null, data: result }
                                            })
                                            .catch(err => {
                                                return { status: 400, error: err, data: null }
                                            });
        next();
        },
        response: (req, res, next) => {
            const { status, error, data } = req._steelsForApprovals;
            res.status(status).json(data).end();
        next();
    }
}