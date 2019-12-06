import React from 'react'
import { MyContext } from './context'
import './App.css'

const OtroComponent = props => {
  console.log(props)
  return <div>soy otro componente</div>
}

class App extends React.Component {
  componentDidMount() {
    console.log(this.context)
  }

  render() {
    return (
      <MyContext.Consumer>
        {context => {
          return (
            <div className="App">
              <h1>{context.state.msg}</h1>
              <button onClick={context.changeMsg}>Change msg</button>
              <OtroComponent context={context} />
            </div>
          )
        }}
      </MyContext.Consumer>
    )
  }
}

App.contextType = MyContext

export default App
