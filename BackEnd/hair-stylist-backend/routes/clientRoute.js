const { Router } = require('express');
const clientController = require('../controllers/clientController'); // Adjust the path as needed

const router = Router();

router.get('/', clientController.getAllClient);
router.get('/:id', clientController.getClient);
router.post('/', clientController.createClient);
router.put('/:id', clientController.updateClient);
router.delete('/:id', clientController.deleteClient);

module.exports = router;