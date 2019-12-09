import React from 'react'
import axios from 'axios'
import './App.css'

class App extends React.Component {
  state = {
    file: {},
    fakeData: {
      name: 'Diego',
      surname: 'Vazquez',
      age: 23
    }
  }

  handleFile = e => {
    this.setState({ file: e.target.files[0] })
  }

  handleSubmit = async e => {
    e.preventDefault()
    const formData = new FormData()
    for (let key in this.state.fakeData) {
      formData.append(key, this.state.fakeData[key])
    }
    formData.append('photo', this.state.file)
    const { data } = await axios.post('http://localhost:3000/upload', formData)
    console.log(data)
  }

  render() {
    return (
      <div className="App">
        <input onChange={this.handleFile} type="file" name="photo" />
        <input onClick={this.handleSubmit} type="submit" value="Send photo" />
      </div>
    )
  }
}

export default App
