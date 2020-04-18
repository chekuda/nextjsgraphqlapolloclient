import mongoose from 'mongoose'
import { createLabel } from '../../pages/api/label'
import { createWorker, getUserById } from '../../pages/api/user'

const runSeeds = async (enableType) =>  {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/quarentine', {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
      })

    let currentLabel
    let newWorker
    let foundUser
    if(enableType === 'currentLabel')
      currentLabel = await createLabel('barrer')
    if(enableType === 'createUser')
      newWorker = await createWorker({
        userName: 'joselabe2',
        email: 'asdad@Aaada.com',
        labelName: 'friega'
      })
    if(enableType === 'foundUser')
       foundUser = await getUserById({ id: '5e9a3a6141844597d215cb2b' })
      console.log({ currentLabel, newWorker, foundUser })
} catch(e) {
    console.log(e)
  }
}

runSeeds('foundUser')
