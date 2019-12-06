import React, { Component, createContext } from 'react'

// 1. crear el contexto
export const MyContext = createContext()

class MyProvider extends Component {
  state = {
    msg: 'Hola desde el contexto'
  }

  changeMsg = () => {
    this.setState({ msg: 'Cualquier otro mensaje' })
  }

  render() {
    const { state, changeMsg } = this
    return (
      <MyContext.Provider
        value={{
          state,
          changeMsg
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export default MyProvider
