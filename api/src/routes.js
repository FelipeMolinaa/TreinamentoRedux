const router = require('express').Router()

const carsController = require('./controllers/carsController')

router.get('/cars', carsController.index)
router.post('/cars', carsController.create)

module.exports = router