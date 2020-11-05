import React from 'react'
import PropTypes from 'prop-types'
import jsxclassnames from 'jsxclassnames'

import styles from './HorizontalSection.styles'

export const HorizontalSection = ({ currentNavBarHeight = 0, backgroundColor = 'bgBlack' }) => {
  const classes = styles()
  return (
    <div
      style={{ height: `calc(100vh - ${currentNavBarHeight}px)` }}
      className={jsxclassnames(classes.fullWidth, [classes[backgroundColor]])}>
    </div>
  )
}

HorizontalSection.propTypes = {
  currentNavBarHeight: PropTypes.number,
  backgroundColor: PropTypes.string,
}
