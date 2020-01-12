import styled from 'styled-components'

const Field = styled.input`
  color: black;
  padding: .6rem;
  border: 1px solid #E6E6E6;
  border-radius: 3px;
  outline: none;
  width: ${({ width }) => `${width}%`};

  &:hover,
  &:focus {
    border-color: #0080FF;
    box-shadow: 0 0 .01px 1px #0080FF;
  }
`

export default Field