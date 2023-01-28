const express = require('express');
const router = express.Router();
const { check } = require('express-validator')
const usersController = require('../controllers/users-controller')

router.post('/signup',
    [check('name').not().isEmpty(),
    check('email').normalizeEmail().isEmail(), // normalize email converts Email@email.com -> email@email.com , isEmail checks whether it is really a email
    check('password').isLength({ min: 6 })],
    usersController.signup);



module.exports = router;