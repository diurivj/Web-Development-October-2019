import styled from 'styled-components'

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  width: 60%;
  height: 60%;
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : 'peru'};
  & input {
    width: 90%;
    height: 50px;
    font-size: 1.5rem;
    outline: none;
  }
  & input[type='submit'] {
    width: 50%;
  }
`

export default StyledForm
