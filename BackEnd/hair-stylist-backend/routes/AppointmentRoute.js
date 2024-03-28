const { Router } =require('express');
const {appointmentController} = require('../controllers');

const router = Router();

// Route to create a new appointment
router.post('/appointments', appointmentController.newAppointment);

//find an appointment
router.get('/appointments/:appointmentId', appointmentController.findAppointment);

// Update an appointment
router.put('/appointments/:appointmentId', appointmentController.updateAppointment);

// Delete an appointment
router.delete('/appointments/:appointmentId', appointmentController.deleteAppointment);


const appointmentRoute = router;
module.exports = router;