import React from 'react'
import Button from '@material-ui/core/Button'

import PropTypes from 'prop-types'
import FileSaver from 'file-saver'

const donwloadFile = (workers) => {
  const list = workers.map(({ name, email }) => `${name} ${email} \n`)
  const newList = ['name email \n'].concat(list)
  const blob = new Blob(newList, {type: "text/plain;charset=utf-8"});
  FileSaver.saveAs(blob, "workerlist.txt");
}

const DowloadButton = ({ workers }) => {
  return (
    <Button
      color='primary'
      variant='contained'
      onClick={() => donwloadFile(workers)}
    >
      Download
    </Button>
  )
}

DowloadButton.propTypes = {
  workers: PropTypes.array
}

export default DowloadButton
