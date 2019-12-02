import React, { Component } from "react";
import Header from "./components/Header";
import Counter from "./components/Counter";

// fragment => <></>

// function component
// const App = props => {
//   console.log(props);
//   return (
//     <>
//       <h1>{props.name}</h1>
//       <p>{props.age}</p>
//     </>
//   );
// };

// class component
class App extends Component {
  state = {
    count: 0,
    data: null,
    title: "Hello from React",
    title1: "que pedo",
    title2: "lol"
  };

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <>
        <Header title={this.state.title} />
        <Header title={this.state.title1} />
        <Header title={this.state.title2} />
        <Counter
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          count={this.state.count}
        />
        <br />
        <input
          className="title1"
          name="title"
          onChange={this.handleInput}
          type="text"
          value={this.state.title}
        />
        <input
          className={this.state.title1 ? "filled" : "empty"}
          name="title1"
          onChange={this.handleInput}
          type="text"
          value={this.state.title1}
        />
        <input
          name="title2"
          onChange={this.handleInput}
          type="text"
          value={this.state.title2}
        />
      </>
    );
  }
}

export default App;
