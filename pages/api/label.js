import Label from '../../models/label'

/*
  Create Label
*/

export const createLabel = async (name) => {
  try {
    const existingLabel = await Label.find({ name })
    if(existingLabel.length) {
      throw new Error('Label Exist')
    }
    let label = await Label.create({ name })
    return label
  } catch(e) {
    return e
  }
}
