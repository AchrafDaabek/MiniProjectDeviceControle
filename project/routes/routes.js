const firmwareRoutes = require('./firmware')
const deviceRoutes = require('./device')
const patientRoutes = require('./patient')

module.exports = (app) => {
  app.use('/api/firmware', firmwareRoutes)
  app.use('/api/device', deviceRoutes)
  app.use('/api/patient', patientRoutes)
}
