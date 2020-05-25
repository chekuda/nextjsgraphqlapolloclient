import React from 'react'
import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'

import styles from './Signup.module.css'

const SIGN_UP = gql`
  mutation SignUp($user: UserInput!) {
    signUp(user: $UserInput) {
      user {
        userName
        email
      }
      token
    }
  }
`;

const SignupSchema = Yup.object().shape({
  userName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!'),
  email: Yup.string()
    .email('Invalid email'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!'),
  confirmpassword: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .test('passwords-match', 'Passwords must match', function(value) {
      return this.parent.password === value;
    }),
})

const Signup = () => {
  const [signUp, { data }] = useMutation(SIGN_UP)
  console.log('data', data)
  return <div className={styles.content}>
    <Paper elevation={3} className={styles.paper}>
      <Typography align='center' variant='h2' gutterBottom={true}>
        Signup
      </Typography>
      <Divider />
      {
        <Formik
          validateOnBlur
          initialValues={{ userName: '', email: '', password: '', confirmpassword: '' }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            signUp({ variables: { ...values } })
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
              <TextField id="userName" label="Username" margin='normal' value={values.userName} onChange={handleChange} onBlur={handleBlur} error={errors.userName && touched.userName && errors.userName} helperText={errors.userName} required/>
              <TextField id="email" label="Email" type='email' margin='normal' value={values.email} onChange={handleChange} onBlur={handleBlur} error={errors.email && touched.email && errors.email} helperText={errors.email} required/>
              <TextField id="password" label="Password (min 6 characters)" type='password' margin='normal' value={values.password} onChange={handleChange} onBlur={handleBlur} error={errors.password && touched.password && errors.password} helperText={errors.password} required/>
              <TextField id="confirmpassword" label="Confirm Passowrd" type='password' margin='normal' value={values.confirmpassword} onChange={handleChange} onBlur={handleBlur} error={errors.confirmpassword && touched.confirmpassword && errors.confirmpassword} helperText={errors.confirmpassword} required/>
              <div className={styles.buttonBox}>
                <Button
                  className={styles.submit}
                  color='primary'
                  size='large'
                  variant='contained'
                  type='submit'
                  disabled={isSubmitting}
                >
                  Signup
                </Button>
              </div>
            </Form>
          }}
        </Formik>
      }
    </Paper>
  </div>
}

export default Signup
