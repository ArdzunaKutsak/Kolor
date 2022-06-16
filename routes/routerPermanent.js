const Router = require('express')
const PermanentController = require('../controllers/PermanentController')
const router = new Router()

router.post('/', PermanentController.create)
router.get('/', PermanentController.getAll)
router.delete('/:id', PermanentController.delete)
module.exports = router