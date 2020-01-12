import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import * as yup from 'yup'

import { login } from '../auth'
import Button from '../components/Button'
import Container from '../components/Container'
import { Form, Field } from '../components/Form'

const LoginPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const Title = styled.h1`
  text-align: center;
  padding: 1rem 0;
`

export default () => {
  const history = useHistory()

  const fieldInitialValues = {
    email: '',
    password: ''
  }  

  const fieldValidations = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required()
  })

  const handleSignIn = data => {
    const { email, password } = data

    if (email && password) {
      login('tokenapi')
      history.push('/')
    }
  }

  return (
    <LoginPage>
      <Container width='30rem'>
        <Title>Todo APP</Title>
        <Form 
          initialValues={fieldInitialValues} 
          validationSchema={fieldValidations}
          onSubmit={handleSignIn}
        >
          <Field name='email'/>
          <Field name='password'/>
          <Button type='primary' width='100'>Gravar</Button>
        </Form>
      </Container>
    </LoginPage>
  )
}