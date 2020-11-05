import { createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import orange from '@material-ui/core/colors/orange'
import red from '@material-ui/core/colors/red'
import yellow from '@material-ui/core/colors/yellow'

export const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: orange,
    colors: {
      red,
      yellow,
    }
  },
})
