const express = require('express')

const deviceController = require('../controllers/device')

const router = express.Router()

router.post('/add', deviceController.addDevice)
router.get('/list', deviceController.getDevice)
router.put('/update', deviceController.updateDeviceFirmware)
module.exports = router
