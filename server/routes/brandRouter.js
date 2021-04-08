const Router = require('express')
const router = new Router()
const brandConroller = require('../controllers/brandConroller')


router.post('/', brandConroller.create)
router.get('/', brandConroller.getALL)

module.exports = router