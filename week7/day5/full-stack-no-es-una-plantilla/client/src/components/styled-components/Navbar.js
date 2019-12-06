import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { MyContext } from '../../context'
import { withRouter } from 'react-router-dom'

const StyledNavbar = styled.nav`
  width: 100vw;
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
  box-sizing: border-box;
  & a {
    padding: 5px;
    color: black
    text-decoration: none;
  }
  & a.navbar-active {
    color: #0f4c81;
  }
`

function Navbar(props) {
  console.log(props)
  return (
    <MyContext.Consumer>
      {context => {
        return (
          <StyledNavbar>
            <NavLink exact to="/" activeClassName="navbar-active">
              Home
            </NavLink>
            <NavLink exact to="/signup" activeClassName="navbar-active">
              Signup
            </NavLink>
            {!context.loggedUser && (
              <NavLink exact to="/login" activeClassName="navbar-active">
                Login
              </NavLink>
            )}
            {context.loggedUser && (
              <span
                onClick={() =>
                  context.handleLogout(() => {
                    props.history.push('/login')
                  })
                }
              >
                Logout
              </span>
            )}
          </StyledNavbar>
        )
      }}
    </MyContext.Consumer>
  )
}

export default withRouter(Navbar)
