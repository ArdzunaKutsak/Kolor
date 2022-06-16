const Router = require('express')
const OpinionController = require('../controllers/OpinionController')
const router = new Router()

router.post('/', OpinionController.create)
router.get('/', OpinionController.getAll)
router.delete('/:id', OpinionController.delete)

module.exports = router