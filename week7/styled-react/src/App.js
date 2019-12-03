import React, { Component } from "react";
import "./App.css";
import { StyledForm } from "./styles/components";
import CardComponent from "./components/CardComponent";

class App extends Component {
  state = {
    players: [
      { name: "Diego", role: "Midlane" },
      { name: "Bicho", role: "Feeder" },
      { name: "Joss", role: "Support" }
    ],
    filterPlayers: [],
    name: "",
    role: "",
    search: ""
  };

  inputChange = ({ target: { name, value } }) => {
    this.setState({
      // Si se borran las llaves menos la que están cambiando es por que hace falta mantener las propiedades existentes del state con 👇
      ...this.state,
      [name]: value
    });
  };

  removePlayer = index => {
    const playersCopy = this.state.players;
    playersCopy.splice(index, 1);
    this.setState({
      players: playersCopy
    });
  };

  filterPlayers = ({ target: { name, value } }) => {
    console.log(value);
    this.setState({
      // Si se borran las llaves menos la que están cambiando es por que hace falta mantener las propiedades existentes del state con 👇
      ...this.state,
      [name]: value,
      filterPlayers: this.state.players.filter(player =>
        player.name.includes(value)
      )
    });
  };

  addPlayer = e => {
    e.preventDefault();
    // const playersCopy = this.state.players;
    // playersCopy.push({ name: this.state.name, role: this.state.role });
    // this.setState({
    //   players: playersCopy,
    //   name: "",
    //   role: ""
    // });
    const { players, name, role } = this.state;
    this.setState({
      players: [...players, { name, role: role }],
      name: "",
      role: ""
    });
  };

  render() {
    return (
      <>
        {/* <Button yolo="success">Hola</Button>
        <Button yolo="info">Hola</Button> */}
        <StyledForm onSubmit={this.addPlayer}>
          <label htmlFor="name">Name</label>
          <input
            onChange={this.inputChange}
            type="text"
            name="name"
            id="name"
            value={this.state.name}
          />
          <label htmlFor="role">Role</label>
          <input
            onChange={this.inputChange}
            type="text"
            name="role"
            id="role"
            value={this.state.role}
          />
          <input type="submit" value="Add" />
        </StyledForm>

        <br />
        <input
          type="text"
          name="search"
          id="search"
          onChange={this.filterPlayers}
          placeholder="🔍 search"
        />
        <br />

        <section style={{ height: "100%" }}>
          {this.state.search.length === 0
            ? this.state.players.map((item, index) => (
                <CardComponent
                  {...item}
                  key={index}
                  index={index}
                  removePlayer={this.removePlayer}
                />
              ))
            : this.state.filterPlayers.map((item, index) => (
                <CardComponent
                  {...item}
                  key={index}
                  index={index}
                  removePlayer={this.removePlayer}
                />
              ))}
        </section>
      </>
    );
  }
}

export default App;
