import User from '../../models/user'
import connectToDb from './middlewares/db'

const handler = async (req, res) => {
  try {
    let user = await User.find({})
    res.send(user)
  }
  catch(e) {
    res.status(500).send(e)
  }
}

export default connectToDb(handler)