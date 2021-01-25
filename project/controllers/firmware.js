const FirmWare = require('../models/firmware')
/*
  @route   GET api/firmware/list
  @desc    get all firmware
  @access  Public 
*/
exports.getFirmWare = async (req, res) => {
  try {
    const firmwares = await FirmWare.find({}).lean()

    return res.status(200).json(firmwares)
  } catch (e) {
    return res.status(400).json(e)
  }
}
/*
  @route   PUT api/firmware/update
  @desc    Update  firmware name 
  @access  Public 
*/
exports.updateFirmWare = async (req, res) => {
  try {
    const FirmWareResult = await FirmWare.findById(req.body._id)
    Object.keys(req.body).forEach((key) => {
      FirmWareResult[key] = req.body[key]
    })
    await FirmWareResult.save()
    return res.status(200).json({ msg: 'FirmWare Updated Successfully' })
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
    @route   POST api/firmware/add
    @desc    add new firmware 
    @access  Public 
  */
exports.addFirmWare = async (req, res) => {
  try {
    const firmWareResult = await FirmWare.create({
      name: req.body.name,
    })

    return res.status(200).json(firmWareResult)
  } catch (e) {
    return res.status(400).json(e)
  }
}

/*
    @route   DELETE api/firmware/delete/:id
    @desc    Delete  firmware
    @access  Public 
  */
exports.deletefirmware = async (req, res) => {
  try {
    const firmwareResult = await FirmWare.findById(req.params.id)
    await firmwareResult.remove()
    return res.sendStatus(200)
  } catch (e) {
    return res.status(400).json(e)
  }
}
