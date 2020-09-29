const router = require('express').Router();

const auth = require('./auth');
const { registration: userRegistration, authenticate: userAuth, logout: userLogout } = require('../admin');
const { registration: steelRegistration, inventory: steelInventory, releaseToCutting: releaseSteel } = require('../rmStore');
const { registration: partRegistration, listAll: partList } = require('../partMaster');
const releaseToCutting = require('../rmStore/releaseToCutting');

//ADMIN
router.post('/users/registration', userRegistration.fetchUserData, userRegistration.saveToMongo, userRegistration.response);
router.post('/users/login', userAuth.fetchLoginDetails, userAuth.searchInMongo, userAuth.verifyUser, userAuth.createToken, userAuth.storeTokenInRedis, userAuth.addTokenToCookie);
router.get('/users/logout', userLogout.deleteTokens);

//RM_STORE
router.post('/steels/registration', auth, steelRegistration.fetchNewSteelData, steelRegistration.saveSteelData, steelRegistration.response);
router.get('/steels/inventory', auth, steelInventory.getDates, steelInventory.searchInMongo, steelInventory.response);
router.get('/steels/releaseSteel', auth, releaseSteel.getPartNo, releaseSteel.searchInMongo)

//PART_MASTER
router.post('/parts/registration', auth, partRegistration.fetchNewPartData, partRegistration.savePartData, partRegistration.response);
router.get('/parts/partList', partList.fetchFromMongo, partList.response)

module.exports = router;