import React from 'react'
import PropTypes from 'prop-types'

import styles from './HorizontalSection.module.css'

export const HorizontalSection = ({ currentNavBarHeight = 0, backgroundColor = 'black' }) => {
  return (
    <div style={{ height: `calc(100vh - ${currentNavBarHeight}px)`, backgroundColor }} className={styles.fullWidth}>
    </div>
  )
}

HorizontalSection.propTypes = {
  currentNavBarHeight: PropTypes.number,
  backgroundColor: PropTypes.string,
}
