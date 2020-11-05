import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
  fullWidth: {
    width: '100%'
  },
  bgBlack: {
    backgroundColor: theme.palette.common.black,
  },
  bgYellow: {
    backgroundColor: theme.palette.colors.yellow[500]
  },
  bgRed: {
    backgroundColor: theme.palette.colors.red[500]
  },
}))
