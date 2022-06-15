const Router = require('express')
const router = new Router()
const routerOpinion = require('./routerOpinion')
const routerTattoo = require('./routerTattoo')
const routerPermanent = require('./routerPermanent')
const routerLips = require('./routerLips')

router.use('/opinion', routerOpinion)
router.use('/tattoo', routerTattoo)
router.use('/permanent', routerPermanent)
router.use('/lips', routerLips)

module.exports = router