const Router = require('express')
const TattooController = require('../controllers/TattooController')
const router = new Router()

router.post('/', TattooController.create)
router.get('/', TattooController.getAll)

module.exports = router