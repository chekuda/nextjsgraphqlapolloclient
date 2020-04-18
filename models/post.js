import mongoose from 'mongoose'

const { Schema } = mongoose

const postSchema = new Schema({
  title: String,
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

// This is for defining the model only once
export default mongoose.models.Post || mongoose.model('Post', postSchema)
