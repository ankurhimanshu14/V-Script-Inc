const router = require('express').Router();

const { registration: userRegistration } = require('../users');

router.get('/testApi', (req, res) => {
    const customer = [
        {id: 1, firstName: 'John', lastName: 'Doe'},
        {id: 2, firstName: 'Ankur', lastName: 'Himanshu'},
        {id: 3, firstName: 'Ankita', lastName: 'Prasad'},
        {id: 4, firstName: 'Shriti', lastName: 'Prasad'}
    ];

    res.json(customer);
});

router.post('/users/registration', userRegistration.fetchUserData, userRegistration.saveToMongo, userRegistration.response);

module.exports = router;