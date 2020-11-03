import React, { useEffect, useRef, useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Link from 'next/link'
import Router from 'next/router'
import jsxclassnames from 'jsxclassnames'

import { getCurretReftHeight } from '../helpers/dom'
import { withApollo, verifyToken, getCookie } from '../lib'
import { theme } from '../lib/theme/theme'
import LoginPage from './login'
import UserHeader from '../components/UserHeader'
import '../styles/global.css'
import styles from './app.module.css'

const pages = ['home', 'trends', 'preferidos', 'workers', 'test']

const publicPages = ['/home', '/signup', '/login', '/test']

const MyApp = ({ Component, pageProps, loggedIn, pathname }) => {
  const appBarEl = useRef(null)
  const [navBar, setNavbar] = useState(null)
  useEffect(() => {
    if (loggedIn || (!loggedIn && publicPages.includes(pathname))) return
    Router.replace(pathname, '/login')
  }, [pathname])
  useEffect(() => setNavbar(appBarEl), [appBarEl])
  const currentNavBarHeight = useMemo(() => getCurretReftHeight(navBar), [navBar])
  return (
    <ThemeProvider theme={theme}>
        <AppBar position='fixed' color='primary' ref={appBarEl}>
          <Toolbar className={styles.header}>
            <div className={styles.menu}>
              {
                pages.map(page =>
                  <Typography key={page}>
                    <Link href={`/${page}`}>
                      <a title={page}>{page}</a>
                    </Link>
                  </Typography>)
              }
            </div>
            <UserHeader loggedIn={loggedIn}/>
          </Toolbar>
        </AppBar>
        <Grid container className={jsxclassnames(styles.fluidContent, { [styles.content]: false })}>
          {
            !loggedIn && !(publicPages.includes(pathname))
              ? <LoginPage {...pageProps}/>
              : <Component {...pageProps} currentNavBarHeight={currentNavBarHeight}/>
          }
        </Grid>
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

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
  loggedIn: PropTypes.bool,
  pathname: PropTypes.string
}

export default withApollo({ ssr: true })(MyApp)
