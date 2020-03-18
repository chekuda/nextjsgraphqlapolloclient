import Post from '../../models/post'
import connectToDb from './middlewares/db'

const handler = async (req, res) => {
  try {
    let post = await Post.find({})
    res.send(post)
  }
  catch(e) {
    res.status(500).send(e)
  }
}

export default connectToDb(handler)