const userController = require('../controller/user.controller.js');
const router = require('express').Router();

// to add new user
router.post('/addUser', userController.addUser);

// to get all user
router.get('/allUsers', userController.getAllUsers);

// to get activated user
router.get('/activated', userController.getActivated);

// to get deactivated
router.get('/deactivated', userController.getDeactivated);

router.get('/:id', userController.getOne);

// to update user info
router.put('/:id', userController.updateUser);

// to soft delete 
router.put('/deactivate/:id', userController.deativateUser);

router.put('/activate/:id', userController.ativateUser);

module.exports = router;