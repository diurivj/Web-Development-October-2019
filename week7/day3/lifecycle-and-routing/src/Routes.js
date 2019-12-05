import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Menu from './components/Menu'
import Detail from './components/Detail'

const Routes = () => (
  <BrowserRouter>
    <Route path="/" component={Menu} />
    <Route path="/:cca3" component={Detail} />
  </BrowserRouter>
)

export default Routes
