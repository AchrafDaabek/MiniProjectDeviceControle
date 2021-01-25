const express = require('express')

const firmWareController = require('../controllers/firmware')

const router = express.Router()
router.get('/list', firmWareController.getFirmWare)
router.post('/add', firmWareController.addFirmWare)
router.put('/update', firmWareController.updateFirmWare)
router.delete('/delete/:id', firmWareController.deletefirmware)
module.exports = router
