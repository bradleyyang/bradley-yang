require('dotenv').config();
const mongoose = require('mongoose');
const Model = require('./models/model');

const port = process.env.PORT || 3000

const express = require('express')
const app = express()
app.use(express.json());





mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to the database')
    app.listen(port, () => {
      console.log(`Listening on port ${port}`)
    })
  })
  .catch((error) => {
    console.log(error)
  })