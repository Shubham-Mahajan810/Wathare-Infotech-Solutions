// models/Data.js
const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  timestamp: { type: Date, required: true },
  sample: { type: Number, required: true },
  // Add other fields as needed
});

const Data = mongoose.model('Data', dataSchema);
module.exports = Data;
