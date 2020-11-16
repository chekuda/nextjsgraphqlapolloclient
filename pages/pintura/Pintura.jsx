import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'

import gallery from 'data/galleryImg/imageList.json'

import styles from './Pintura.styles'


const Pintura = () => {
  const classes = styles()
  return (
      <div className={classes.gridContainer}>
      {
        gallery.map(data =>
          <Paper className={classes.paper}>
            <img src={data.img} className={classes.gridItem} alt={data.title}/>
          </Paper>
        )
      }
      </div>
  )
}

export default Pintura
