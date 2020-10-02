const router = require('express').Router();

const auth = require('./auth');
const { registration: userRegistration, authenticate: userAuth, logout: userLogout } = require('../admin');
const { registration: steelRegistration, inventory: steelInventory, releaseToCutting: releaseSteel } = require('../rmStore');
const { registration: partRegistration, listAll: partList } = require('../partMaster');
const releaseToCutting = require('../rmStore/releaseToCutting');

//ADMIN
router.post('/auth/users/registration', auth, userRegistration.fetchUserData, userRegistration.saveToMongo, userRegistration.response);
router.post('/users/login', userAuth.fetchLoginDetails, userAuth.searchInMongo, userAuth.verifyUser, userAuth.createToken, userAuth.storeTokenInRedis, userAuth.addTokenToCookie);
router.get('/auth/users/logout', userLogout.deleteTokens);

//RM_STORE
router.post('/auth/steels/registration', auth, steelRegistration.fetchNewSteelData, steelRegistration.saveSteelData, steelRegistration.response);
router.get('/auth/steels/inventory', auth, steelInventory.getDates, steelInventory.searchInMongo, steelInventory.response);
router.get('/auth/steels/releaseSteel', auth, releaseSteel.getPartNo, releaseSteel.searchInMongo)

//PART_MASTER
router.post('/auth/parts/registration', partRegistration.fetchNewPartData, partRegistration.savePartData, partRegistration.response);
router.get('/auth/parts/partlist', auth, partList.fetchFromMongo, partList.response)

module.exports = router;