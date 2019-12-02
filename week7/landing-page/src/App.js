import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";

class App extends Component {
  state = {
    navbar: {
      title: "Login"
    },
    isLogged: false,
    count: 0
  };

  changeState = () => {
    // this.setState(prevState => {
    //   console.log(prevState);
    //   return {
    //     ...prevState,
    //     navbar: {
    //       ...prevState.navbar,
    //       title: prevState.navbar.title === "Login" ? "Logout" : "Login"
    //     }
    //   };
    // });
    let change;
    let logged;
    if (this.state.navbar.title === "Login") {
      change = "Logout";
      logged = true;
    } else {
      logged = false;
      change = "Login";
    }
    this.setState({ navbar: { title: change }, isLogged: logged });
  };

  render() {
    if (this.state.isLogged) {
      return (
        <div>
          <Navbar
            handleLogin={this.changeState}
            title={this.state.navbar.title}
          />
          <p>Tu perfil</p>
        </div>
      );
    }
    return (
      <div>
        <Navbar
          handleLogin={this.changeState}
          title={this.state.navbar.title}
        />
        <Landing handleLogin={this.changeState} />
        <img src="/logo192.png" alt="" />
      </div>
    );
  }
}

export default App;
