const express = require('express');

const {
  signup,
  login,
  resetPassword,
  forgotPassword,
  updatePassword,
  protect,
} = require('../controllers/authController.js');
const { getAllUsers } = require('../controllers/userController.js');

const router = express.Router();

router.get('/', getAllUsers);

router.post('/signup', signup);
router.post('/login', login);
router.post('/forgotPassword', forgotPassword);
router.patch('/resetPassword/:token', resetPassword);

router.use(protect);

// This should be a protected route for logged in users
router.patch('/updateMyPassword', updatePassword);

module.exports = router;
