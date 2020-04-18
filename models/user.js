import mongoose from 'mongoose'

const { Schema } = mongoose

const userSchema = new Schema({
  userName: String,
  email: String,
  password: String,
  type: String,
  created: Date,
  labels: [{ type: Schema.Types.ObjectId, ref: 'Label' }]
})

// This is for defining the model only once
export default mongoose.models.User || mongoose.model('User', userSchema)
