import React from 'react'
import Card from '../styled-components/Card'
import Row from '../styled-components/Row'
import Input from '../styled-components/Input'
import axios from 'axios'

class HomeContainer extends React.Component {
  state = {
    form: {
      name: 'Kanye West',
      quote: 'Loading...',
      width: window.innerWidth,
      language: window.navigator.language
    }
  }

  async componentDidMount() {
    const { form } = this.state
    const response = await axios.get('https://api.kanye.rest/')
    const { quote } = response.data
    this.setState({ form: { ...form, quote } })
    document.title = form.name
    window.addEventListener('resize', this.handleWidth)
  }

  componentDidUpdate() {
    const { form } = this.state
    document.title = form.name
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWidth)
  }

  handleWidth = () => {
    const { form } = this.state
    this.setState({ form: { ...form, width: window.innerWidth } })
  }

  handleInput = e => {
    const { form } = this.state
    const key = e.target.name
    form[key] = e.target.value
    this.setState({ form })
  }

  render() {
    const { form } = this.state
    const { name, quote, language, width } = form
    return (
      <div className="App">
        <Card>
          <Row label="Name">
            <Input name="name" value={name} onChange={this.handleInput} />
          </Row>
          <Row label="Quote">
            {/* {!quote && (
              <img
                src="https://media3.giphy.com/media/cZDRRGVuNMLOo/source.gif"
                alt="loading"
              />
            )} */}
            <Input name="quote" value={quote} onChange={this.handleInput} />
          </Row>
          <Row label="Language">
            <Input
              name="language"
              value={language}
              onChange={this.handleInput}
            />
          </Row>
          <Row label="Width">
            <Input name="width" value={width} onChange={this.handleInput} />
          </Row>
        </Card>
      </div>
    )
  }
}

export default HomeContainer
