import bcrypt from 'bcrypt'

import { createToken } from '../../lib'
import isEmail from 'validator/lib/isEmail'
import User from '../../models/user'
import connectToDb from './middlewares/db'

const validateEmail = email => {
  if(!email || !isEmail(email)) {
    throw new Error('Not valid email')
  }
}

/*
 * SignUp
*/
export const signUp = connectToDb(async ({
  user: {
    userName,
    email,
    password
  }
}) => {
  try {
    validateEmail(email)
    const existingUser = await User.find({ email })
    if(existingUser.length !== 0) {
      throw new Error('User Already exist')
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    let user = await User.create({
      userName,
      email,
      password: hashedPassword
    })
    const token = createToken(user.id)

    return { user, token }
  }
  catch(err) {
    return err
  }
})

/**
 * Login
*/

export const login = connectToDb(async ({ email, password }) => {
  try {
    validateEmail(email)
    const user = await User.findOne({ email })
    const isValidPassword = await bcrypt.compare(password, user.password)
    if(!isValidPassword) {
      throw new Error('Wrong password')
    }
    const token = createToken(user.id)
    return { user, token }
  }
  catch(e) {
    return e
  }
})


/*
  Get all users
*/
export const getUsers = connectToDb(async ({}, { user }) => {
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
  try {
    let user = await User.findById(id)
    return user
  }
  catch(e) {
    return e
  }
})
