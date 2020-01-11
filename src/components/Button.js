import styled from 'styled-components'

const getSize = size => {
  if (size === 'sm') 
    return 'padding: .4rem .6rem;'

  if (size === 'lg') 
    return 'padding: 1rem 1.2rem;'
  
  if (size === 'bg') 
    return 'padding: 1.2rem 1.4rem;'
    
  return 'padding: .8rem 1rem;'
}

const getStyle = type => {
  if (type === 'primary') 
    return `background-color: #1B90FD;`
  
  if (type === 'warning') 
    return `background-color: #DFF201;`

  if (type === 'success') 
    return `background-color: #23D856;`
  
  if (type === 'danger') 
    return `background-color: #E90300;`
  
  return `background-color: #01E385;`
}

const Button = styled.button`
  position: relative;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none; 
  z-index: 1;
  ${({ size }) => getSize(size)}
  ${({ type }) => getStyle(type)}

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    z-index: -1;
  }

  &:hover {
    &:before {
      background-color: rgba(0, 0, 0, .01);
    }
  }

  &:active {
    &:before {
      background-color: rgba(0, 0, 0, .04);
    }
  }
`

export default Button