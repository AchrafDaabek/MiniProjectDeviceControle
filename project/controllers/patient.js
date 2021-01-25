const Patient = require('../models/patient')
const Device = require('../models/device')
/*
    @route   PUT api/patient/associer
    @desc   Associer Patient/device
    @access  Public 
  */

exports.associerPatient = async (req, res) => {
  try {
    const deviceTest = await Device.findOne({ name: req.body.device.name })
    const patientTest = await Patient.findOne({ name: req.body.name })
    const patientDevice = await Patient.findOne({ device: deviceTest._id })

    if (deviceTest && patientTest) {
      if (patientDevice) {
        return res.status(400).send('KO')
      }
      patientTest.device = deviceTest._id
      await patientTest.save()
      return res.status(200).send('ok')
    }
    return res.status(400).send('device or patient not found')
  } catch (e) {
    return res.status(400).json(e)
  }
}
/*
    @route   PUT api/patient/dissocier
    @desc   Dissocier  Patient/device 
    @access  Public 
  */

exports.dissocierPatient = async (req, res) => {
  try {
    const patientTest = await Patient.findOne({ name: req.body.name }).populate(
      'device'
    )

    if (patientTest) {
      if (patientTest.device.name === req.body.device.name) {
        patientTest.device = null
        await patientTest.save()
        return res.status(200).send('ok')
      }
      return res.status(400).send('ko')
    }
    return res.status(400).send('patient not found')
  } catch (e) {
    return res.status(400).json(e)
  }
}
/*
  @route   GET api/patient/list
  @desc    get all patients
  @access  Public 
*/
exports.getPatients = async (req, res) => {
  try {
    const PatientsResult = await Patient.find({}).populate('device')

    return res.status(200).json(PatientsResult)
  } catch (e) {
    return res.status(400).json(e)
  }
}

/*
  @route   PUT api/patient/update
  @desc    Update  Patient name 
  @access  Public 
*/
exports.updatePatient = async (req, res) => {
  try {
    const PatientResult = await Patient.findById(req.body._id)
    PatientResult.name = req.body.name
    await PatientResult.save()
    return res.status(200).json({ msg: 'patient name Updated Successfully' })
  } catch (e) {
    return res.status(400).json({
      errors: [
        {
          msg: e.errmsg,
        },
      ],
    })
  }
}
/*
      @route   POST api/patient/add
      @desc    add new patient 
      @access  Public 
    */
exports.addPatient = async (req, res) => {
  try {
    const patientResult = await Patient.create({
      name: req.body.name,
    })

    return res.status(200).json(patientResult)
  } catch (e) {
    return res.status(400).json(e)
  }
}

/*
      @route   DELETE api/patient/delete/:id
      @desc    Delete  Patient
      @access  Public 
    */
exports.deletePatient = async (req, res) => {
  try {
    const PatientResult = await Patient.findById(req.params.id)
    await PatientResult.remove()
    return res.sendStatus(200)
  } catch (e) {
    return res.status(400).json(e)
  }
}
