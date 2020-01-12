import styled from 'styled-components'

const getSize = size => {
  if (size === 'sm') 
    return '.4rem .6rem'

  if (size === 'lg') 
    return '.8rem 1rem'
  
  if (size === 'bg') 
    return '1rem 1.2rem'
    
  return '.6rem .8rem'
}

const getType = type => {
  if (type === 'primary') 
    return '#1B90FD'
  
  if (type === 'warning') 
    return '#DFF201'

  if (type === 'success') 
    return '#23D856'
  
  if (type === 'danger') 
    return '#E90300'
  
  return '#0080FF'
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
  width: ${({ width }) => `${width}%` || 'auto'};
  padding: ${({ size }) => getSize(size)};
  background-color: ${({ type }) => getType(type)};
  
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