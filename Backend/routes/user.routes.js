const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const {body} = require('express-validator')

router.post('/register', [
  body('email').isEmail().withMessage('Email is not valid'),
  body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long'),
  body('fullname.firstname').isLength({min: 2}).withMessage('First name must be at least 2 characters long'),
  body('fullname.lastname').isLength({min: 2}).withMessage('Last name must be at least 2 characters long')
],userController.registerUser)

router.post('/login',[
  body('email').isEmail().withMessage('Invalid Email'),
  body('password').isLength({min:6}).withMessage('password must be at least 6 characters')
],
userController.loginUser
)


module.exports = router;
