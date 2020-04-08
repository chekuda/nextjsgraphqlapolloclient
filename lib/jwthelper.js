import jwt from 'jsonwebtoken'

const JWT_SECRET = 'test'

export const verifyToken = token => {
  try {
    return jwt.verify(token, JWT_SECRET)
  } catch(e) {
    console.log('Couldnt authentificate because of ', e)
    return false
  }
}

export const createToken = id => jwt.sign({ user: id }, JWT_SECRET, { expiresIn: '1d' })