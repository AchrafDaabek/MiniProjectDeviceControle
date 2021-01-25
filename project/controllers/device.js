const Device = require('../models/device')
const FirmWare = require('../models/firmware')
/*
    @route   POST api/device/add
    @desc   Déclarer device avec Firmware 
    @access  Public 
  */

exports.addDevice = async (req, res) => {
  try {
    const firmwareTest = await FirmWare.findOne({
      name: req.body.firmware.name,
    })
    const deviceTest = await Device.findOne({ name: req.body.name })
    if (firmwareTest) {
      if (deviceTest) {
        return res.status(400).send('KO')
      }
      await Device.create({
        name: req.body.name,
        firmware: firmwareTest._id,
      })
      return res.status(200).send('OK')
    }
    return res.status(400).send('firmWare not found')
  } catch (e) {
    return res.status(400).json(e)
  }
}

/*
    @route   PUT api/device/update
    @desc   update  device/firmware 
    @access  Public 
  */

exports.updateDeviceFirmware = async (req, res) => {
  try {
    const deviceToUpdate = await Device.findOne({ name: req.body.name })
    const newFirmWare = await FirmWare.findOne({ name: req.body.firmware.name })

    if (deviceToUpdate && newFirmWare) {
      deviceToUpdate.firmware = newFirmWare._id
      await deviceToUpdate.save()
      const devices = await Device.find({}).populate('firmware')
      return res.status(200).json(devices)
    }
    return res.status(400).send('device or firmware not found')
  } catch (e) {
    return res.status(400).json(e)
  }
}

/*
  @route   GET api/device/list
  @desc    get all devices
  @access  Public 
*/
exports.getDevice = async (req, res) => {
  try {
    const devicesResult = await Device.find({}).populate('firmware')

    return res.status(200).json(devicesResult)
  } catch (e) {
    return res.status(400).json(e)
  }
}
