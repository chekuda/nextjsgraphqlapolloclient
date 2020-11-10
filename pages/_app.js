import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Link from 'next/link'
import Router from 'next/router'
import jsxclassnames from 'jsxclassnames'

import { getCurretReftHeight } from 'helpers/dom'
import { withApollo, verifyToken, getCookie } from 'lib'
import { theme } from 'lib/theme/theme'
import LoginPage from './login'
import UserHeader from 'components/UserHeader'

import '../styles/global.css'
import styles from './app.styles.js'

const pages = ['home', 'trends', 'preferidos', 'workers', 'test']
const publicPages = ['/home', '/signup', '/login', '/test']

const MyApp = ({ Component, pageProps, loggedIn, pathname, hasTopImage }) => {
  const classes = styles()
  const appBarEl = useRef(null)
  const [navBar, setNavbar] = useState(null)
  const [currentNavBarHeight, setCurrentNavBarHeight] = useState(0)
  useEffect(() => {
    if (loggedIn || (!loggedIn && publicPages.includes(pathname))) return
    Router.replace(pathname, '/login')
  }, [pathname])
  useEffect(() => setNavbar(appBarEl), [appBarEl, pathname])
  useEffect(() => setCurrentNavBarHeight(getCurretReftHeight(navBar)), [navBar, pathname])
  return (
    <ThemeProvider theme={theme}>
        <div ref={appBarEl} className={classes.topHeadContainer}>
          {
            hasTopImage && <div className={classes.overHeadImage}>
              <img className={classes.topImage} src='/trnsparente.png' alt="logo" />
            </div>
          }
          <AppBar position='relative' color='default'>
            <Toolbar className={classes.header}>
              <div className={classes.menu}>
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
        </div>
        {/** Enable type of content */}
        <Grid container className={jsxclassnames({ [classes.fluidContent]: false } , { [classes.content]: false })} style={{ paddingTop: currentNavBarHeight }}>
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
    pathname,
    hasTopImage: pathname.includes('home')
  }
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
  loggedIn: PropTypes.bool,
  pathname: PropTypes.string,
  hasTopImage: PropTypes.bool,
}

export default withApollo({ ssr: true })(MyApp)
