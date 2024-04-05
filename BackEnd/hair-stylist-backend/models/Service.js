const mongoose = require('mongoose');
const TAG = 'Service';

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  duration: { type: Number, required: true },
  price: { type: Number, required: true }
}, {
  collection: TAG
});

const Service = mongoose.model(TAG, serviceSchema);
module.exports = { Service };