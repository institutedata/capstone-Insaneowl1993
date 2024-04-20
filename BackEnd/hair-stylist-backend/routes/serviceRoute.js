const { Router } = require('express');
const serviceController = require('../controllers/serviceController'); // Adjust the path as needed

const router = Router();

router.get('/', serviceController.getAllServices);
router.get('/:id', serviceController.getService);
router.post('/', serviceController.createService);
router.put('/:id', serviceController.updateService);
router.delete('/:id', serviceController.deleteService);

module.exports = router;