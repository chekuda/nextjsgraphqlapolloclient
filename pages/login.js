import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'

import styles from './Login.module.css'

export default () => {
  return <div className={styles.content}>
    <Paper elevation={3} className={styles.paper}>
      <Typography align='center' variant='h2' gutterBottom={true}>
        Login
      </Typography>
      <Divider />
      <div className={styles.form}>
        <TextField id="username" label="Username" margin='normal'/>
        <TextField id="password" label="Password" margin='normal'/>
        <div className={styles.buttonBox}>
          <Button
            className={styles.submit}
            color='primary'
            size='large'
            variant='contained'
          >
            LogIn
          </Button>
        </div>
      </div>
    </Paper>
  </div>
}

