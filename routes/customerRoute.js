
var app = require('../app')
var router = require('express').Router()
var customerController = require('../controllers/customerController')


router.get('/', customerController.getCustomers)

router.post('/', customerController.postCustomers)

router.post('/login', customerController.postLogin)


module.exports = router
