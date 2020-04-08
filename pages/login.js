import React, { useEffect, useState } from 'react'
import { Formik, Form } from 'formik'
import { withRouter } from 'next/router'
import { useMutation } from '@apollo/react-hooks'
import * as Yup from 'yup'
import { gql } from 'apollo-boost'
import Link from 'next/link'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'

import styles from './Login.module.css'

const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login( email: $email, password: $password) {
      user {
        userName
        email
      }
      token
    }
  }
`;

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!'),
})

const Login = ({ router }) => {
  const [login, { data = {}, loading, error }] = useMutation(LOGIN)
  const [isLogged, setIsLogged] = useState(false)
  useEffect(() => {
    if(data.login) {
      document.cookie = `_quarantine=${data.login.token}`
      setIsLogged(true)
    }
  }, [data])

  if(isLogged) {
    return router.push('/home')
  }

  return <div className={styles.content}>
    <Paper elevation={3} className={styles.paper}>
      <Typography align='center' variant='h2' gutterBottom={true}>
        Login
      </Typography>
      <Divider />
      {
        <Formik
          validateOnBlur
          initialValues={{ email: '', password: '' }}
          validationSchema={LoginSchema}
          onSubmit={values => {
            login({ variables: { ...values } })
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => {
           return <Form onSubmit={handleSubmit} className={styles.form}>
              <TextField id="email" label="Email" type='email' margin='normal' value={values.email} onChange={handleChange} onBlur={handleBlur} error={errors.email && touched.email && errors.email} helperText={errors.email} required/>
              <TextField id="password" label="Password" type='password' margin='normal' value={values.password} onChange={handleChange} onBlur={handleBlur} error={errors.password && touched.password && errors.password} helperText={errors.password} required/>
              <div className={styles.buttonBox}>
                <Button
                  className={styles.submit}
                  color='primary'
                  size='large'
                  variant='contained'
                  type='submit'
                  disabled={isSubmitting && !error}
                >
                  Login
                </Button>
              </div>
            </Form>
          }}
        </Formik>
      }
      <div className={styles.signup}>
        <Typography align='center' color='primary'>
          <Link href='/signup'>
            <a className={styles.link}>Sign Up</a>
          </Link>
        </Typography>
      </div>
    </Paper>
  </div>
}

export default withRouter(Login)
