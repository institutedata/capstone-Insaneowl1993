const { Router } = require('express');
const appointmentController = require('../controllers/appointmentController'); // Adjust the path as needed

const router = Router();

router.get('/', appointmentController.getAllAppointments);
router.post('/', appointmentController.newAppointment);
router.get('/:appointmentId', appointmentController.findAppointment);
router.put('/:appointmentId', appointmentController.updateAppointment);
router.delete('/:appointmentId', appointmentController.deleteAppointment);

module.exports = router;