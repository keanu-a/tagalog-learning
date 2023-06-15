const User = require('../models/User.js');
const jwt = require('jsonwebtoken');
const sendEmail = require('../util/email.js');
const crypto = require('crypto');

// Function for signing token with user id
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// Function to handle signing up a user
module.exports.signup = async (req, res) => {
  try {
    const { name, username, email, password, passwordConfirm } = req.body;

    const newUser = await User.create({
      name,
      username,
      email,
      password,
      passwordConfirm,
    });

    const token = signToken(newUser._id);

    // Remove password from the user object
    newUser.password = undefined;

    // Using status code 201 for creation succeeded
    res.status(201).json({
      status: 'Sign up successful',
      token,
      user: newUser,
    });
  } catch (error) {
    res
      .status(404)
      .json({ message: error.message, code: error.code, name: error.name });
  }
};

// Function for logging in a user
module.exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Check if email and password exist
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: 'Please provide email and password' });
    }

    // Check if user exists && password is correct
    const user = await User.findOne({ email }).select('+password');

    if (!user || !(await user.correctPassword(password, user.password))) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // If everything is valid, send token to client
    const token = signToken(user._id);

    res.status(200).json({ status: 'Login success', token });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Function for when a user forgets their password
module.exports.forgotPassword = async (req, res) => {
  try {
    // Get user based on email
    const foundUser = await User.findOne({ email: req.body.email });

    // If there is no user found, error
    if (!foundUser) {
      return res
        .status(404)
        .json({ message: 'There is no user with that email.' });
    }

    // Generate random hashed token
    const resetToken = foundUser.createPasswordResetToken();
    await foundUser.save({ validateBeforeSave: false });

    // Send it to user's email
    const resetURL = `${req.protocol}://${req.get(
      'host'
    )}/api/v1/user/resetPassword/${resetToken}`;

    // Message on the email
    const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirmed to ${resetURL}.\nIf you didn't forget your password, please ignore this email.`;

    // Send email to user
    try {
      await sendEmail({
        email: foundUser.email,
        subject: 'Your password reset token (valid for 10 minutes)',
        message,
      });

      res
        .status(200)
        .json({ status: 'Success', message: 'Token sent to email' });
    } catch (error) {
      // If error, remove fields and validation
      foundUser.passwordResetToken = undefined;
      foundUser.passwordResetExpires = undefined;
      await foundUser.save({ validateBeforeSave: false });

      res.status(500).json({
        status: 'Fail',
        message: 'There was an error sending the email, try again later.',
      });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Function to reset a user's password
module.exports.resetPassword = async (req, res) => {
  try {
    // Get user based on the token
    const hashedToken = crypto
      .createHash('sha256')
      .update(req.params.token)
      .digest('hex');

    const user = await User.findOne({
      passwordResetToken: hashedToken,
      passwordResetExpires: { $gt: Date.now() },
    });

    // If token has not expired, and there is a user, set the new password
    if (!user) {
      return res
        .status(400)
        .json({ status: 'Fail', message: 'Token is invalid or has expired' });
    }

    // Update changedPasswordAt property for the user
    user.password = req.body.password;
    user.passwordConfirm = req.body.passwordConfirm;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;

    await user.save();

    // Log the user in, send JWT to client
    const token = signToken(user._id);

    res.status(200).json({ status: 'Password reset successfully', token });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Function to update a logged in users password
module.exports.updatePassword = async (req, res) => {
  try {
    // Get user from the database
    const user = await User.findById(req.user.id).select('+password');

    // Check if the POSTed current password is correct
    if (
      !(await user.correctPassword(req.body.passwordCurrent, user.password))
    ) {
      return res.status(401).json({
        status: 'Fail',
        message: 'The entered current password is wrong',
      });
    }

    // If correct, update password
    user.password = req.body.password;
    user.passwordConfirm = req.body.passwordConfirm;
    await user.save();

    // Log user in, send JWT to the client
    const token = signToken(user._id);

    res.status(200).json({ status: 'Password reset successfully', token });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
