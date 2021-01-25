const mongoose = require('mongoose')

const PatientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    device: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Device',
    },
  },
  {
    versionkey: false,
    timestamps: true,
  }
)

module.exports = mongoose.model('Patient', PatientSchema)
