const express = require('express')

const PatientController = require('../controllers/patient')

const router = express.Router()
router.get('/list', PatientController.getPatients)
router.post('/add', PatientController.addPatient)
router.put('/update', PatientController.updatePatient)
router.put('/associer', PatientController.associerPatient)
router.put('/dissocier', PatientController.dissocierPatient)
router.delete('/delete/:id', PatientController.deletePatient)
module.exports = router
