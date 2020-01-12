import styled from 'styled-components'

const Container = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ color }) => color};
  padding: ${({ padding }) => padding || '1rem'};
`

export default Container