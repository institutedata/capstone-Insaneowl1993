const {Router} = require('express');
const serviceController = require('../controllers/serviceController');

const router = Router();

router.post('/services', serviceController.createService);
router.put('/services/:id', serviceController.updateService);
router.delete('/services/:id', serviceController.deleteService);


const serviceRoute = router
module.exports = serviceRoute;