import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Paper } from '@material-ui/core'

// import styles from './WithSidebar.styles.js'

const SideBarContainer = ({ sidebar }) =>
  <Grid container direction='column'>
    {sidebar}
  </Grid>

SideBarContainer.propTypes = {
  sidebar: PropTypes.node,
}

const Main = ({ contentWithPaper, main }) =>
  contentWithPaper
    ? <Paper>{main}</Paper>
    : main

Main.propTypes = {
  main: PropTypes.node,
  contentWithPaper: PropTypes.bool,
}

export const WithSidebar = ({ main, sidebar, contentWithPaper, sidebarPos = 'right' }) => {
  return (
    <Grid item xs={12}>
      <Grid container>
        <Grid item xs={12} sm={sidebarPos === 'right' ? 8 : 4}>
          { sidebarPos === 'right'
            ? <Main main={main} contentWithPaper={contentWithPaper} />
            : <SideBarContainer sidebar={sidebar} />
          }
        </Grid>
        <Grid item xs={12} sm={sidebarPos === 'right' ? 4 : 8}>
          { sidebarPos === 'right'
            ? <SideBarContainer sidebar={sidebar} />
            : <Main main={main} contentWithPaper={contentWithPaper} />
          }
        </Grid>
      </Grid>
    </Grid>
  )
}

WithSidebar.propTypes = {
  main: PropTypes.node,
  sidebar: PropTypes.node,
  contentWithPaper: PropTypes.bool,
  sidebarPos: PropTypes.oneOf(['left', 'right']),
}
