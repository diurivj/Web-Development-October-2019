import React, { Component } from 'react'
import Card from '../styled-components/Card'
import axios from 'axios'
import Row from '../styled-components/Row'
import Button from '../styled-components/StyledButton'

const ENDPOINT = 'https://rickandmortyapi.com/api/character/'

class CharacterDetail extends Component {
  state = {}

  async componentDidMount() {
    const { id } = this.props.match.params
    const { data } = await axios.get(`${ENDPOINT}${id}`)
    this.setState({ character: { ...data } })
  }

  render() {
    const { character } = this.state
    if (!character) {
      return (
        <div className="App">
          <img
            src="https://thumbs.gfycat.com/SlimyElasticAnemonecrab-size_restricted.gif"
            alt="loading"
          />
        </div>
      )
    }
    return (
      <div className="App">
        <Card>
          <Row>
            <img src={character.image} alt={character.name} width="100px" />
          </Row>
          <Row label={character.name}></Row>
          <Row label={character.status}></Row>
          <Row label={character.gender}></Row>
        </Card>
        <Button {...this.props} />
      </div>
    )
  }
}

export default CharacterDetail
