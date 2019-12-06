import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  @import url('https://fonts.googleapis.com/css?family=Vibes&display=swap');
  font-family: 'Vibes', cursive;
  width: 100%;
  outline: none;
  border: none;
  height: 50%;
  font-size: 3rem;
  text-align: center;
  background: #e5d8c6;
`

function Input({ name, onChange, value }) {
  return (
    <StyledInput
      name={name}
      onChange={onChange}
      value={value === 'es-ES' ? '🇲🇽' : value === 'en-US' ? '🇺🇸' : value}
    />
  )
}

export default Input
