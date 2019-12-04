import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  width: 30%;
  height: 100px;
  background: powderblue;
  color: white;
`

function Button(props) {
  const goBack = () => {
    props.history.push('/characters')
  }
  return <StyledButton onClick={goBack}>Go back</StyledButton>
}

export default Button
