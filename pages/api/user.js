import User from '../../models/user'
import connectToDb from './middlewares/db'

/*
  Get all users
*/
export const getUsers = connectToDb(async () => {
  try {
    let user = await User.find()
    return user
  }
  catch(e) {
    return e
  }
})

/*
  Get user by Id
*/

export const getUserById = connectToDb(async ({ id }) => {
  console.log('id', id)
  try {
    let user = await User.findById(id)
    return user
  }
  catch(e) {
    return e
  }
})