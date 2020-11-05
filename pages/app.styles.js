import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => {
  return {
    header: {
    display: 'flex',
    justifyContent: 'space-between',
    '& a': {
      color: theme.palette.common.white,
      textDecoration: 'none',
      cursor: 'pointer',
      paddingRight: '20px',
      transition: 'color 0.2 ease-in-out',
      '&:hover': {
        color: theme.palette.secondary.main
      },
    },
  },
  menu: {
    display: 'flex'
  },
  button: {
    '& span': {
      color: theme.palette.secondary
    }
  },
  content: {
    padding: '64px 24px 0px 24px'
  },
  fluidContent: {
    padding: '64px 0px 0px 0px'
  }}
})
