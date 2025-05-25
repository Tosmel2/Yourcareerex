const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, text) => {
  // Configure your SMTP transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail', // or your email provider
    auth: {
      user: process.env.EMAIL_USER, // your email address
      pass: process.env.EMAIL_PASS  // your email password or app password
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;