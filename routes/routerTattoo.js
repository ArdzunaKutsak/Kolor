const Router = require('express')
const TattooController = require('../controllers/TattooController')
const router = new Router()

router.post('/', TattooController.create)
router.get('/', TattooController.getAll)
router.delete('/:id', TattooController.delete)
module.exports = router