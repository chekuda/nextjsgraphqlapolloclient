import React, { Fragment } from 'react'

import Grid from '@material-ui/core/Grid'

import { WithSidebar } from '../../layouts/WithSidebar'
import { HorizontalSection} from '../../layouts/HorizontalSection'
import { SimpleCard } from '../../components/SimpleCard'

const TestLayout = ({ currentNavBarHeight }) => {
  console.log('currentNavBarHeight', currentNavBarHeight)
  return (
      // <WithSidebar
      //   main={<div>jose</div>}
      //   sidebar={<SideBar/>}
      // />
    <Fragment>
      <HorizontalSection currentNavBarHeight={currentNavBarHeight} backgroundColor='yellow'/>
      <HorizontalSection currentNavBarHeight={currentNavBarHeight}/>
    </Fragment>
  )
}

const SideBar = () => (
  <>
    {
      [1,2,3,4,5,6].map(ele => <Grid item key={ele}><SimpleCard /></Grid>)
    }
  </>
)

export default TestLayout
