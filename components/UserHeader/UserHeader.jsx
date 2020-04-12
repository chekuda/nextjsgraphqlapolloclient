import React, { useState } from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import Typography from '@material-ui/core/Typography'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

import { COOKIENAME } from '../../lib/getCookie'

import styles from './UserHeader.module.css'

export const LoginLink = () =>
  <Typography>
    <Link href="/login">
      <a title='login'>login</a>
    </Link>
  </Typography>

const UserHeader = ({ loggedIn, router }) => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const onLogOut = () => {
    handleClose()
    router.push('/login')
    document.cookie = `${COOKIENAME}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
  }

  return (
    loggedIn
      ? <div className={styles.container}>
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} color='inherit'>
            <AccountCircleIcon />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={onLogOut}>Logout</MenuItem>
          </Menu>
        </div>
      : <LoginLink />
  )
}

export default withRouter(UserHeader)
