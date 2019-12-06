import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Navbar from './components/styled-components/Navbar'
import SignupContainer from './components/Signup/SignupContainer'
import LoginContainer from './components/Login/LoginContainer'
import Home from './components/Home/Home'

function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignupContainer} />
        <Route exact path="/login" component={LoginContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
