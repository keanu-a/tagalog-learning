const mongoose = require('mongoose');
const User = require('../models/User.js');

module.exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({ status: 'success', users });
  } catch (error) {
    res.status(404).json({ status: 'fail', message: error.message });
  }
};
