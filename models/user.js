import mongoose from 'mongoose'

const { Schema } = mongoose

const userSchema = new Schema({
  name: String,
  surname: String,
})

// This is for defining the model only once
export default mongoose.models.User || mongoose.model('User', userSchema)