import React from 'react'

import Grid from '@material-ui/core/Grid'

import { WithSidebar } from '../../layouts/WithSidebar'
import { SimpleCard } from '../../components/SimpleCard'

const TestLayout = () => {
  return (
    <WithSidebar
      main={<div>jose</div>}
      sidebar={<SideBar/>}
    />
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
