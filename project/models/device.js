const mongoose = require('mongoose')

const DeviceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    firmware: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'FirmWare',
      required: true,
    },
  },
  {
    versionkey: false,
    timestamps: true,
  }
)

module.exports = mongoose.model('Device', DeviceSchema)
