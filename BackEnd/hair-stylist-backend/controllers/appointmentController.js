const { Appointment } = require('../models/Appointment');
const { Client } = require('../models/Client'); // Import Client model to associate appointments
const asyncHandler = require('../middleware/asyncHandler');

// Fetch all appointments from the database
const getAllAppointments = asyncHandler(async (req, res) => {
  const appointments = await Appointment.find({});
  res.status(200).json({ success: true, message: 'All Appointments Fetched', data: appointments });
});

// Create a new appointment and associate it with a client
const newAppointment = asyncHandler(async (req, res) => {
  const { clientId, appointmentDateTime, duration, status, notes } = req.body;

  // Verify client existence before creating an appointment
  const client = await Client.findById(clientId);
  if (!client) {
    return res.status(404).json({ message: 'Client not found' });
  }

  // Create and save the new appointment
  const appointment = await Appointment.create({
    clientId, appointmentDateTime, duration, status, notes
  });

  // Associate the appointment with the client
  client.appointments.push(appointment._id);
  await client.save();

  res.status(201).json({ success: true, message: 'Appointment added', data: appointment });
});

// Find a specific appointment by ID
const findAppointment = asyncHandler(async (req, res) => {
  const appointment = await Appointment.findById(req.params.appointmentId);
  if (!appointment) {
    return res.status(404).json({ message: "Appointment not found" });
  }
  res.status(200).json(appointment);
});

// Update an appointment's details
const updateAppointment = asyncHandler(async (req, res) => {
  const updatedAppointment = await Appointment.findByIdAndUpdate(req.params.appointmentId, req.body, { new: true });
  if (!updatedAppointment) {
    return res.status(404).json({ message: 'Appointment not found' });
  }
  res.status(200).json(updatedAppointment);
});

// Delete an appointment from the database
const deleteAppointment = asyncHandler(async (req, res) => {
  const appointment = await Appointment.findByIdAndDelete(req.params.appointmentId);
  if (!appointment) {
    return res.status(404).json({ message: 'Appointment not found' });
  }
  res.status(200).json({ message: 'Appointment deleted successfully' });
});

module.exports = { getAllAppointments, newAppointment, findAppointment, updateAppointment, deleteAppointment };
