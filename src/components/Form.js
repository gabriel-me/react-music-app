import React from 'react'
import { Formik, Form as Frm, ErrorMessage, Field as Input} from 'formik'
import styled from 'styled-components'

const FormContainer = styled.div`
  width: 100%;
`

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: ${({ width }) => `${width}%`};

  label {
    font-size: .7rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  input {
    color: black;
    padding: .6rem;
    border: 1px solid #E6E6E6;
    border-radius: 3px;
    outline: none;
    width: 100%;

    &:hover,
    &:focus {
      border-color: #0080FF;
      box-shadow: 0 0 .01px 1px #0080FF;
    }
  }

  span {
    font-size: .8rem;   
    color: red;
  }
`

const Form = ({ initialValues, validationSchema, onSubmit, children }) =>
  <FormContainer>
    <Formik 
      initialValues={initialValues} 
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Frm>
        {children}
      </Frm>
    </Formik>
  </FormContainer>

const Field = ({ name, placeholder, width }) => 
  <FieldContainer width={width}>
    <label>{name}</label>
    <Input name={name} placeholder={placeholder}/>
    <ErrorMessage name={name} component='span'/>
  </FieldContainer>

export { Form, Field }