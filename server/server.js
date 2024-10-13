require('dotenv').config();
const port = process.env.PORT || 3000;
const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send("Welcome to my porfolio");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});