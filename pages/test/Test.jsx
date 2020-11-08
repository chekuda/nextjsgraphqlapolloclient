import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import styles from './Test.styles'

// import { WithSidebar } from 'layouts/WithSidebar'
import { HorizontalSection} from 'layouts/HorizontalSection'
// import { SimpleCard } from 'components/SimpleCard'

const TestLayout = ({ currentNavBarHeight }) => {
  const classes = styles()
  return (
      // <WithSidebar
      //   main={<div>jose</div>}
      //   sidebar={<SideBar/>}
      // />
    <Fragment>
      <HorizontalSection currentNavBarHeight={currentNavBarHeight} backgroundColor='bgYellow'>
        <div className={classes.gridContainer}>
          <Grid container spacing={5} direction='column'>
            <Grid item>
              <Typography variant="subtitle1" color='textSecondary'>
                A new way of styling our wardrobe is here…
              </Typography>
            </Grid>
            <Grid item className={classes.gridItem} >
              <Typography variant="h4">
                All the brands and styles you need in one place
              </Typography>
            </Grid>
          </Grid>
        </div>
      </HorizontalSection>
      <HorizontalSection currentNavBarHeight={currentNavBarHeight}/>
    </Fragment>
  )
}

TestLayout.propTypes = {
  currentNavBarHeight: PropTypes.number,
}

// const SideBar = () => (
//   <>
//     {
//       [1,2,3,4,5,6].map(ele => <Grid item key={ele}><SimpleCard /></Grid>)
//     }
//   </>
// )

export default TestLayout
