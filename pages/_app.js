import React, { useEffect } from 'react'
import { withApollo } from '../lib/apollo'
import { ThemeProvider } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Link from 'next/link'
import Router from 'next/router'

import LoginPage from './login'
import { getCookie } from '../lib/getCookie'
import { theme } from '../components/theme/theme'

import '../styles/global.css'
import styles from './app.module.css'

const MyApp = ({ Component, pageProps, loggedIn, pathname }) => {
  useEffect(() => {
    if (loggedIn || pathname === '/signup' || pathname === '/login') return
    Router.replace(pathname, '/login', { shallow: true })
  }, [loggedIn])

  return (
    <ThemeProvider theme={theme}>
        <AppBar position="fixed" color="primary">
          <Toolbar className={styles.header}>
            <div className={styles.menu}>
              <Typography>
                <Link href="/home">
                  <a>Home</a>
                </Link>
              </Typography>
              <Typography>
                <Link href="/trends">
                    <a>Trends</a>
                </Link>
              </Typography>
              <Typography>
                <Link href="/preferidos">
                    <a>Preferidos</a>
                </Link>
              </Typography>
            </div>
            <Typography>
              <Link href="/login">
                <a>login</a>
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={styles.content}>
        { 
          !loggedIn && !(pathname === '/signup' || pathname === '/login')
            ? <LoginPage {...pageProps}/>
            : <Component {...pageProps} />
        } 
        </div>
  </ThemeProvider>
  )
}

MyApp.getInitialProps = async request => {
  const { req, pathname } = request.ctx
  const token = getCookie(req.headers.cookie)

  return {
    loggedIn: !!token || pathname === '/signup' || pathname === '/login',
    pathname
  }
}

export default withApollo({ ssr: true })(MyApp)