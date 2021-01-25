const mongoose = require('mongoose')

const FirmWareSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    versionkey: false,
    timestamps: true,
  }
)

module.exports = mongoose.model('FirmWare', FirmWareSchema)
