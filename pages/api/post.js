import Post from '../../models/post'
import connectToDb from './middlewares/db'

const handler = async () => {
  try {
    let post = await Post.find({})
    return post
  }
  catch(e) {
    return e
  }
}

export default connectToDb(handler)