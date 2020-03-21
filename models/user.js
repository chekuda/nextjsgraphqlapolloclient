import mongoose from 'mongoose'

const { Schema } = mongoose

const userSchema = new Schema({
  userName: String,
  email: String,
  password: String,
})

// This is for defining the model only once
export default mongoose.models.User || mongoose.model('User', userSchema)