import mongoose from 'mongoose'

const { Schema } = mongoose

const labelSchema = new Schema({
  name: String
})

// This is for defining the model only once
export default mongoose.models.Label || mongoose.model('Label', labelSchema)
