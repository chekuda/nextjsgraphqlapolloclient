// db.js
import mongoose from 'mongoose'

const connectDb = handler => async (req, res) => {
  // Only connect to one 
  if (mongoose.connections[0].readyState) return handler(req, res);
  // Using new database connection
  console.log('Connecting to db')
  await mongoose.connect('mongodb://127.0.0.1:27017/quarentine', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })

  return handler(req, res)
}

export default connectDb