import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Card from '../styled-components/Card'
import axios from 'axios'

const ENDPOINT = 'https://rickandmortyapi.com/api/character/'

class CharactersContainer extends Component {
  state = {
    characters: []
  }

  async componentDidMount() {
    const { data } = await axios.get(ENDPOINT)
    this.setState({ characters: [...data.results] })
  }

  render() {
    const { characters } = this.state
    return (
      <div className="App">
        <Card>
          <h1>Characters</h1>
          {characters.map(character => (
            <Link key={character.id} to={`/characters/${character.id}`}>
              <img src={character.image} alt={character.name} width="80px" />
            </Link>
          ))}
        </Card>
      </div>
    )
  }
}

export default CharactersContainer
