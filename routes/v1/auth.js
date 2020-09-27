require('dotenv').config();
const jwt = require('jsonwebtoken');
const redisClient = require('../../_helpers/redis');

const jwtKey = process.env.JWT_SECRET_KEY;

module.exports = function auth(req, res, next) {
    req._token = req.cookies.refreshToken || '';
    if(!req._token) {
        return res.status(401).send({ error: 'You need to login'});
    }

    const decrypt = jwt.verify(req._token, jwtKey, function(error, result) {
        if(result) {
            return result;
        } else {
            console.log(error);
        };
    });

    let args = [`${decrypt.username}-token`, 0, Date.now()];

    redisClient.zrangebyscore(args, function(error, listOfTokens) {
        if(!listOfTokens.includes(req.cookies.refreshToken)) {
            console.log('Token expired');
            res.clearCookie('refreshToken');
            res.status(404).end();
        } else {
            next();
        }
    })
}