import React, { Component } from 'react'
import countries from '../countries.json'

export default class Detail extends Component {
  state = {
    country: {}
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged()
    }
  }

  onRouteChanged = () => {
    const country = countries.find(
      country => country.cca3 === this.props.match.params.cca3
    )
    this.setState({ country })
  }

  render() {
    const { country } = this.state
    return <div>{country.flag}</div>
  }
}
