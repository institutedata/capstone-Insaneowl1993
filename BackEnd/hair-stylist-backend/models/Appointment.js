const mongoose = require('mongoose');
const TAG='Appointment';

const appointmentSchema = new mongoose.Schema({
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
    required: true,
  },
  appointmentDateTime: {
    type: Date,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['scheduled', 'completed', 'canceled'],
    required: true,
  },
  notes: {
    type: String,
  },
});

const Appointment = mongoose.model(TAG, appointmentSchema);

module.exports = [Appointment];