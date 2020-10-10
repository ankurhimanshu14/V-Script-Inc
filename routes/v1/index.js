const router = require('express').Router();

const auth = require('./auth');
const { registration: userRegistration, authenticate: userAuth, logout: userLogout } = require('../admin');
const { newGateEntry, listGRN } = require('../gateEntry');
const { assignApprovals: steelApprovals, registration: steelRegistration, inventory: steelInventory, releaseToCutting: releaseSteel } = require('../rmStore');
const { registration: partRegistration, listAll: partList } = require('../partMaster');
const { registration: scheduleRegistration } = require('../scheduling');

//ADMIN
router.post('/private/users/registration', auth, userRegistration.fetchUserData, userRegistration.saveToMongo, userRegistration.response);
router.post('/public/users/login', userAuth.fetchLoginDetails, userAuth.searchInMongo, userAuth.verifyUser, userAuth.createToken, userAuth.storeTokenInRedis, userAuth.addTokenToCookie);
router.get('/private/users/logout', auth, userLogout.deleteTokens);

//GATE_ENTRY
router.post('/private/items/registration', auth, newGateEntry.fetchNewItemData, newGateEntry.saveItemData, newGateEntry.response);
router.get('/private/items/listGRN', auth, listGRN.fetchFromMongo, listGRN.response);

//RM_STORE
router.post('/private/steels/approvals', auth, steelApprovals.populateItems, steelApprovals.saveSteelDetails);
// router.post('/private/steels/registration', auth, steelRegistration.fetchNewSteelData, steelRegistration.saveSteelData, steelRegistration.response);
router.get('/private/steels/inventory', auth, steelInventory.getDates, steelInventory.searchInMongo, steelInventory.response);
router.get('/private/steels/releaseSteel', auth, releaseSteel.getPartNo, releaseSteel.searchInMongo)

//PART_MASTER
router.post('/private/parts/registration', auth, partRegistration.fetchNewPartData, partRegistration.savePartData, partRegistration.response);
router.get('/private/parts/partlist', auth, partList.fetchFromMongo, partList.response)

//SCHEDULE
router.post('/private/schedule/registration', auth, scheduleRegistration.checkScheduleExists, scheduleRegistration.fetchScheduleItems, scheduleRegistration.response);

module.exports = router;