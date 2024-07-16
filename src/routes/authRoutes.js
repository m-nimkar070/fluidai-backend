const express = require('express');
const authController = require('../controllers/authController');
const { registerValidation, loginValidation } = require('../validation/authValidation');

const router = express.Router();
/*
    Route: register user
*/
router.post('/register', registerValidation, authController.register);
/*
    Route: login user
*/
router.post('/login', loginValidation, authController.login);

module.exports = router;
