import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Link from 'next/link'

import { theme } from '../components/theme/theme'

import '../styles/global.css'
import styles from './app.module.css'

export default function MyApp({ Component, pageProps }) {
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
        <Component {...pageProps} />
      </div>
  </ThemeProvider>
  )
}