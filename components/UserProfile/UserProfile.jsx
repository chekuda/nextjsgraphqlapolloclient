import React, { Fragment } from 'react'
import Paper from '@material-ui/core/Paper'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import TextField from '@material-ui/core/TextField'

import styles from './UserProfile.module.css'

const UserProfile = ({ user }) => (
  <Paper className={styles.paper}>
    {console.log('user', user)}
    <div className={styles.userContainer}>
      <div className={styles.userImage}>
        <AccountCircleIcon style={{ fontSize: 150 }} />
      </div>
      <div className={styles.userDescription}>
        <Fragment>
        {
          Object.entries(user).map(([key, val]) =>
            <div key={key} className={styles.inputSection}>
              <TextField
                id={key}
                label={key[0].toUpperCase() + key.slice(1)}
                value={val}
                className={styles.section}
                InputProps={{
                  readOnly: true,
                }}
              />
            </div>
          )
        }
        </Fragment>
      </div>
    </div>
  </Paper>
)

export default UserProfile
