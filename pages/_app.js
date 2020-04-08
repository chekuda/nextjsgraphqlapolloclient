
import React, { useEffect } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Link from 'next/link'
import Router from 'next/router'

import { withApollo, verifyToken, getCookie } from '../lib'
import { theme } from '../components/theme/theme'
import LoginPage from './login'

import '../styles/global.css'
import styles from './app.module.css'

const MyApp = ({ Component, pageProps, loggedIn, pathname }) => {
  useEffect(() => {
    if (loggedIn || (!loggedIn && (pathname === '/signup' || pathname === '/login'))) return
    Router.replace(pathname, '/login', { shallow: true })
  }, [pathname])
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

MyApp.getInitialProps = async ({ ctx }) => {
  const { req, pathname } = ctx
  const token = req
    ? getCookie(req.headers.cookie)
    : getCookie(document.cookie)

  let loggedIn = verifyToken(token)

  return {
    loggedIn: !!loggedIn,
    pathname
  }
}

export default withApollo({ ssr: true })(MyApp)