import React from 'react'
import { Grid, Paper } from '@material-ui/core'

import styles from './WithSidebar.module.css'


const SideBarContainer = ({ sidebar }) =>
  <Grid container direction='column' spacing={1}>
    {sidebar}
  </Grid>

const Main = ({ contentWithPaper, main }) =>
  contentWithPaper
    ? <Paper>{main}</Paper>
    : main

export const WithSidebar = ({ main, sidebar, contentWithPaper, sidebarPos = 'right' }) => {
  return <Grid container spacing={2}>
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
}
