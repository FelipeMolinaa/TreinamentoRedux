const router = require('express').Router()

const carsController = require('./controllers/carsController')

router.get('/cars', carsController.index)

module.exports = router