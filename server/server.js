require('dotenv').config();
const port = process.env.PORT || 3000;
const express = require('express');
const app = express();
app.use(express.json());
const nodemailer = require("nodemailer");
app.use(express.json());
app.use(express.urlencoded()); 
const cors = require('cors');


app.use(cors({
  origin: 'https://bradley-yang.vercel.app/contact', // Update with your Vercel frontend URL
  methods: ['POST', 'GET'], // Allow GET and POST methods
  credentials: true, // If you're using cookies, this is important
}));

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN
  }
});

app.get('/', (req, res) => {
  res.send("hello");
}); 

app.post('/contact', (req, res) => {
  
  const { email, name, message } = req.body;
  

  let mailOptions = {
    from: process.env.MAIL_USERNAME,
    to: process.env.MAIL_USERNAME,
    subject: `Message from ${name} at ${email}`,
    text: message
  };

  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
    }
  });

  res.send("successful");
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});