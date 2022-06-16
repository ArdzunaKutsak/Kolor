const Router = require('express')
const LipsController = require('../controllers/LipsController')
const router = new Router()

router.post('/', LipsController.create)
router.get('/', LipsController.getAll)
router.delete('/:id', LipsController.delete)
module.exports = router