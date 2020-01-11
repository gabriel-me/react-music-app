import styled from 'styled-components'

const Field = styled.input`
  color: black;
  padding: .6rem;
  border: 1px solid #E6E6E6;
  border-radius: 3px;
  outline: none;

  &:hover,
  &:focus {
    border-color: #01E385;
    box-shadow: 0 0 .01px 1px #01E385;
  }
`

export default Field