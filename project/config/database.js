const mongoose = require('mongoose')

exports.connect = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('MongoDB Connected')
    })
    .catch((err) => console.log(err))
}
