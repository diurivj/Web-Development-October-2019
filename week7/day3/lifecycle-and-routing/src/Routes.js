import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomeContainer from './components/home/HomeContainer'
import Nav from './components/styled-components/Navbar'
import CharactersContainer from './components/characters/CharactersContainer'
import CharacterDetail from './components/characters/CharactersDetail'

const Routes = () => (
  <BrowserRouter>
    <Nav />
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/characters" component={CharactersContainer} />
      <Route exact path="/characters/:id" component={CharacterDetail} />
    </Switch>
  </BrowserRouter>
)

export default Routes
