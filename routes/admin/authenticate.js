require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { USER_MODEL } = require('../../models/users');
const redisClient = require('../../_helpers/redis');

const secretKey = process.env.JWT_SECRET_KEY;

module.exports = {
    fetchLoginDetails: (req, res, next) => {
        req._loginDetails = {
            _username: req.headers.username,
            _clientPassword: req.headers.password
        };
        if(!req._loginDetails) {
            res.status(401).json({msg: 'Credentials not entered'}).end();
        } else {
            next();
        }
    },
    searchInMongo: async (req, res, next) => {
        req._foundUser = await USER_MODEL.findOne({ 'username': req._loginDetails._username})
        .then(result => { return result; })
        .catch(err => {
            res.status(401).json({msg: 'Credentials does not match our records.'}).end();
        });
        if(!req._foundUser) {
            res.status(404).json({msg: 'Credentials are incorrect'}).end();
        } else {
            next();
        }
    },
    verifyUser: async (req, res, next) => {
        const { password, ...otherDetails } = req._foundUser;
        req._verifiedUser = await bcrypt.compare(req._loginDetails._clientPassword, password)
                                        .then(result => {
                                            if (result) {
                                                return req._foundUser;
                                            } else {
                                                res.status(404).json({msg: 'Credentials are wrong'}).end();
                                            }
                                        })
                                        .catch(error => next(error));
                                        next();
    },

    createToken: (req, res, next) => {
        console.log(req._verifiedUser)
        if(req._verifiedUser) {
            const { _id, username, ...other } = req._verifiedUser;
            const tokenPayload = { userId: _id, role: role, authority: authority, username: username };
            console.log(tokenPayload);
            req._newToken = jwt.sign(tokenPayload, secretKey, { algorithm: 'HS256'}, {expiresIn: 60*60*24*7 }, function(err, token) {
                return token;
            })
            next();
        }
    },
    storeTokenInRedis: (req, res, next) => {
        const { username, ...others } = req._verifiedUser;
        const tokenKey = Date.now() + 5*1000;
        redisClient.zadd(`${username}-token`, tokenKey, req._newToken, function(error, result) {
            if(error) {
                res.status(500).json({msg: 'Something went wrong!'}).end();
            } else {
                next();
            }
        });
    },
    addTokenToCookie: (req, res, next) => {
        cookieOptions= {
            expires: new Date(Date.now() + 86400*1000),
            httpOnly: true,
            secure:false,
            sameSite:'strict'
        };
        
        res.cookie('refreshToken', req._newToken, cookieOptions);
        res.status(200).json({msg:'You are ready to read/ write our records.'}).end();
        next();
    }
}