import React from 'react'
import Paper from '@material-ui/core/Paper'

import styles from './Gallery.styles'

const Gallery = ({ gallery = [] }) => {
  const classes = styles()
  return (
    <div className={classes.gridContainer}>
    {
      gallery.map(data =>
        <Paper key={data.title} className={classes.paper}>
          <img src={data.img} className={classes.gridItem} alt={data.title}/>
        </Paper>
      )
    }
    </div>
  )
}

export default Gallery
