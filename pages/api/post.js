import Post from '../../models/post'
import connectToDb from './middlewares/db'

export const createPost = connectToDb(async ({ title }, { user }) => {
  try {
    if(!user) {
      throw new Error('User not Logged')
    }
    let post = await Post.create({ userId: user, title })
    return post
  }
  catch(e) {
    return e
  }
})

export const getPostsById = connectToDb(async(_, { user }) => {
  try {
    if(!user) {
      throw new Error('User not Logged')
    }
    let post = await Post.find({ userId: user })
    return post
  }
  catch(e) {
    return e
  }
})

export const findPostsByUserId = connectToDb(async({}, { user }) => {
  try {
    if(!user) {
      throw new Error('User not Logged')
    }
    let post = await Post.find({ userId: user })
    return post
  }
  catch(e) {
    return e
  }
})