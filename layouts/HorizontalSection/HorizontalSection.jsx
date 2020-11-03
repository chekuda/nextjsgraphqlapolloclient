import React from 'react'

import styles from './HorizontalSection.module.css'

export const HorizontalSection = ({ currentNavBarHeight = 0, backgroundColor = 'black' }) => {
  return (
    <div style={{ height: `calc(100vh - ${currentNavBarHeight}px)`, backgroundColor }} className={styles.fullWidth}>
    </div>
  )
}
