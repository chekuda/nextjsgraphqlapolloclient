
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Link from 'next/link'
import Router from 'next/router'

import { withApollo, verifyToken, getCookie } from '../lib'
import { theme } from '../lib/theme/theme'
import LoginPage from './login'
import UserHeader from '../components/UserHeader'
import '../styles/global.css'
import styles from './app.module.css'

const privatePages = ['workers']

const MyApp = ({ Component, pageProps, loggedIn, pathname }) => {
  // useEffect(() => {
  //   if (loggedIn || (!loggedIn && (pathname === '/signup' || pathname === '/login'))) return
  //   Router.replace(pathname, '/login')
  // }, [pathname])

  return (
    <ThemeProvider theme={theme}>
        <AppBar position='fixed' color='primary'>
          <Toolbar className={styles.header}>
            <div className={styles.menu}>
              {
                privatePages.map(page =>
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
        <div className={styles.content}>
        {/* {
          !loggedIn && !(pathname === '/signup' || pathname === '/login')
            ? <LoginPage {...pageProps}/> */}
            <Component {...pageProps} />
        {/* } */}
        </div>
  </ThemeProvider>
  )
}

// MyApp.getInitialProps = async ({ ctx }) => {
//   const { req, pathname } = ctx

//   const token = req
//     ? getCookie(req.headers.cookie)
//     : getCookie(document.cookie)

//   let loggedIn = verifyToken(token)

//   return {
//     loggedIn: !!loggedIn,
//     pathname
//   }
// }

// MyApp.propTypes = {
//   Component: PropTypes.func,
//   pageProps: PropTypes.object,
//   loggedIn: PropTypes.bool,
//   pathname: PropTypes.string
// }

export default withApollo({ ssr: true })(MyApp)
