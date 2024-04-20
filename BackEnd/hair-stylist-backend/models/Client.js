const mongoose = require('mongoose');
const TAG = 'Client';

const ClientSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/\S+@\S+\.\S+/, "Please enter a valid Email"]
  },
  appointments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Appointment'
  }]
}, {
  timestamps: true,
  collection: TAG
});

const Client = mongoose.model(TAG, ClientSchema);
module.exports = { Client };
