const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
  name: String,
});

const Model = mongoose.model('Restaurant', modelSchema);

module.exports = Model;