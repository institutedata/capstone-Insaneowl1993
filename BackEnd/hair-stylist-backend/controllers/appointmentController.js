const { Appointment } = require('../models/Appointment');
const {Client} = require('../models');
const { asyncHandler } = require('../middleware');


const newAppointment = asyncHandler(async (req, res, next) => {

    try {
        // Create a new appointment
        const appointment = new Appointment(req.body);

        // Save the appointment
        const savedAppointment = await appointment.save();

        // Add appointment to client's history
        const client = await Client.findById(req.params.clientId);
        if (!client) {
            return res.status(404).json({ message: 'Client not found' });
        }

        client.history = client.history || [];
        client.history.push(savedAppointment._id);

        await client.save();

        res.status(201).json(savedAppointment);
    } catch (error) {
    
        console.log(error.message)
        res.status(500).json({ message: error.message });
    }
});

//search for an appointment
const findAppointment = asyncHandler(async (req, res) => {
    const { appointmentId } = req.params;
    const appointment = await Appointment.findById(appointmentId);
  
    if (!appointment) {
      res.status(404).json({ message: "Appointment not found" });
      return;
    }
  
    res.status(200).json(appointment);
  });

// Update an appointment
const updateAppointment = asyncHandler(async (req, res) => {
    try {
        const updatedAppointment = await Appointment.findByIdAndUpdate(
            req.params.appointmentId,
            req.body,
            { new: true }
        );
        res.status(200).json(updatedAppointment);
    } catch (error) {
        res.status(500).json({ message: "Error updating appointment", error });
    }
});

// Delete an appointment
const deleteAppointment = asyncHandler (async(req, res) => {
    try {
        await Appointment.findByIdAndDelete(req.params.appointmentId);
        res.status(200).json({ message: "Appointment deleted" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting appointment", error });
    }
});


exports.newAppointment = newAppointment;
exports.findAppointment = findAppointment;
exports.updateAppointment = updateAppointment;
exports.deleteAppointment = deleteAppointment;

const appointmentController = { newAppointment, updateAppointment, deleteAppointment, findAppointment };
module.exports = appointmentController;