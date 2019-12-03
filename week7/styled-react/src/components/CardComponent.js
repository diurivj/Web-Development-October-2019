import React, { Component } from "react";
import { Card } from "../styles/components";

export default class CardComponent extends Component {
  state = {
    showLinks: false
  };

  switch = () => {
    //
    // this.setState({
    //   showLinks: !this.state.showLinks //literalmente accedemos al valor actual
    // });
    // accedemos al estado previo en el momento del setState
    this.setState(prevState => ({
      showLinks: !prevState.showLinks
    }));
  };
  render() {
    return (
      <Card
        onClick={this.switch}
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgLw3Yxfr6q6P3oFhUNJPMe9qI7faKuQHw3YLWDh4V5LtKt9cP&s"
      >
        <h2>{this.props.name}</h2>
        <p>{this.props.role}</p>
        {/* sinecesito pasar un parametro custom o más de uno incluyendo event, usamos una función */}
        <button onClick={() => this.props.removePlayer(this.props.index)}>
          X
        </button>
      </Card>
    );
  }
}
