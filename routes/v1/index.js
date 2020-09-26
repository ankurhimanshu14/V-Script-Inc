const router = require('express').Router();

const auth = require('./auth');
const { registration: userRegistration, authenticate: userAuth, logout: userLogout } = require('../admin');
const { registration: steelRegistration, inventory: steelInventory, releaseToCutting: releaseSteel } = require('../rmStore');
const releaseToCutting = require('../rmStore/releaseToCutting');

//ADMIN
router.post('/users/registration', userRegistration.fetchUserData, userRegistration.saveToMongo, userRegistration.response);
router.get('/users/login', userAuth.fetchLoginDetails, userAuth.searchInMongo, userAuth.verifyUser, userAuth.storeTokenInRedis, userAuth.addTokenToCookie);
router.get('/users/logout', userLogout.deleteTokens);

//RM_STORE
router.post('/steels/registration', steelRegistration.fetchNewSteelData, steelRegistration.saveSteelData, steelRegistration.response);
router.get('/steels/inventory', auth, steelInventory.getDates, steelInventory.searchInMongo, steelInventory.response);
router.get('/steels/releaseSteel', releaseSteel.getPartNo, releaseSteel.searchInMongo)
module.exports = router;