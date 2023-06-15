const nodemailer = require('nodemailer');

const sendEmail = async ({ email, subject, message }) => {
  // Create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Define email options
  const mailOptions = {
    from: 'Tagalog Learning <test@tagalog-learning.com>',
    to: email,
    subject,
    text: message,
    // html:
  };

  // Send the email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
