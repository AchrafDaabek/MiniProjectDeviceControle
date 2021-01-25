// const isProd = process.env.NODE_ENV === 'production'

const bodyParser = require('body-parser')

module.exports = (app) => {
  app.use(bodyParser.json({ limit: '100mb' }))
  app.use(bodyParser.urlencoded({ extended: true }))

  // app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }))

  //   app.use(morgan('dev'));
  /* 
  if (isProd) {
    app.use(compression());
    app.use(helmet());
  } else { 
  */
  const cors = require('cors')
  app.use(cors())
  // }
}
