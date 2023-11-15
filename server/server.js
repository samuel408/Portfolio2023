const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3001; // Set your desired port

app.use(cors());
app.use(bodyParser.json());

app.post('/', (req, res) => {
  const { name, email, message } = req.body;

  // Use nodemailer to send an email
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'samuel14082023@outlook.com', // Your email address
      pass: 'Samuel408!', // Your Gmail password or App Password
    },
  });

  const mailOptions = {
    from: 'samuel14082023@outlook.com',
    to: 'samuelwebsiteemails@gmail.com', // The email address where you want to receive form submissions
    subject: 'New Website Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.error(error);
    }
    console.log('Email sent: ' + info.response);
  });

  res.json({ message: 'Form submitted successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
