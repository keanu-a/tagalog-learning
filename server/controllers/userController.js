const mongoose = require('mongoose');
const User = require('../models/User.js');

module.exports.getUser = async (req, res) => {
  try {
    const foundUser = await User.findOne({ tagalog: word });

    res.status(200).json({ status: 'success', user: foundUser });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({ status: 'success', users });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
