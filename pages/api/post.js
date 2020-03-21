import Post from '../../models/post'
import connectToDb from './middlewares/db'

export const createPost = connectToDb(async ({ userId, title }) => {
  try {
    let post = await Post.create({ userId, title })
    return post
  }
  catch(e) {
    return e
  }
})

export const getPosts = connectToDb(async() => {
  try {
    let post = await Post.find({})
    return post
  }
  catch(e) {
    return e
  }
})

export const findPostsByUserId = connectToDb(async({ userId }) => {
  try {
    let post = await Post.find({ userId })
    return post
  }
  catch(e) {
    return e
  }
})