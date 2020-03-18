import mongoose from 'mongoose'

const { Schema } = mongoose

const postSchema = new Schema({ name: String })

// This is for defining the model only once
export default mongoose.models.Post || mongoose.model('Post', postSchema)