const { Router } = require('express')
const {clientController} = require('../controllers')

const router = Router()

router.get('/', clientController.getAllClient)
router.get('/:id', clientController.getClient)
router.post('/', clientController.createClient)
router.put('/:id', clientController.updateClient)
router.delete('/:id', clientController.deleteClient)


const clientRoute = router
module.exports = clientRoute