import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
  content: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)'
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    maxWidth: '400px',
    padding: '20px',
  },
  form: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '30px 0 10px 0',
    '& > *': {
      width: '90%'
    }
  },
  buttonBox: {
    margin: '15px'
  },
  submit: {
    width: '100%'
  },
}))
