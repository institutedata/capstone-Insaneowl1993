const {Router} = require('express');
const {serviceController} = require('../controllers');

const router = Router();

router.get('/services', serviceController.getAllServices);
router.get('/services/:id', serviceController.getService);
router.post('/services', serviceController.createService);
router.put('/services/:id', serviceController.updateService);
router.delete('/services/:id', serviceController.deleteService);


const serviceRoute = router
module.exports = serviceRoute;