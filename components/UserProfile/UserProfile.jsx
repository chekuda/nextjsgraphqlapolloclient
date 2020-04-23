import React, { Fragment, useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import EditIcon from '@material-ui/icons/Edit'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import TextField from '@material-ui/core/TextField'

import styles from './UserProfile.module.css'

const UserProfile = ({ user = {}, onClose }) => {
  const [currentUser, setUserProperties] = useState(user)
  const [isEditing, setIsEditing] = useState(false)

  const onChangeUserProperties = useCallback(({ target }) => {
    const { name, value } = target
    setUserProperties({...currentUser, [name]: value })
  }, [])

  useEffect(() => {
    setUserProperties(user)
    setIsEditing(false)
  }, [user])

  return <Paper className={styles.paper}>
    <div className={styles.icons}>
      <EditIcon style={{ fontSize: 30 }} onClick={() => setIsEditing(!isEditing)} color={isEditing ? 'primary' : 'action'}/>
    </div>
    <div className={styles.userContainer}>
      <div className={styles.userImage}>
        <AccountCircleIcon style={{ fontSize: 150 }}/>
      </div>
      <div className={styles.userDescription}>
        <Fragment>
        {
          Object.entries(currentUser).map(([key, val]) =>
            key !== 'id' && <div key={key} className={styles.inputSection}>
              <TextField
                id={key}
                label={key[0].toUpperCase() + key.slice(1)}
                name={key}
                value={val}
                className={styles.section}
                onChange={onChangeUserProperties}
                InputProps={{
                  readOnly: !isEditing,
                }}
              />
            </div>
          )
        }
        </Fragment>
      </div>
      <div className={styles.closeButtonWrapper}>
        <Button
          variant="contained"
          color={isEditing ? 'primary' : 'default'}
          onClick={() => onClose(false)}
          classes={{ root: styles.closeButton }}
          selected={true}
        >
          {isEditing ? 'Save' : 'Close' }
        </Button>
      </div>
    </div>
  </Paper>
}

UserProfile.propTypes = {
  user: PropTypes.object,
  onClose: PropTypes.func
}

export default UserProfile
