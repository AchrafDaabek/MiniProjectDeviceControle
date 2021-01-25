require('dotenv').config()

const express = require('express')
// const logger = require('pino')()

const app = express()
// app.use(express.json({ limit: '100mb' }))
// app.use(express.urlencoded({ limit: '100mb' }))
const routes = require('./routes/routes')
const middlewares = require('./config/middlewares')
const database = require('./config/database')

middlewares(app)
database.connect()

routes(app)
app.listen(process.env.PORT, () => {
  console.log('listen on port %d', process.env.PORT)
})
