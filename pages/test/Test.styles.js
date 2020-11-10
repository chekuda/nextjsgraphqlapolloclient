import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => {
  // console.log('thene', theme)
  return {
    gridContainer: {
      padding: 25,
    },  
    gridItem: {
      '&.MuiGrid-item': {
        paddingTop: 0,
      }
    }
  }
})
