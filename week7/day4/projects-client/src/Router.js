import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AddProject from "./pages/AddProject";

const Signup = () => <h1>Signup</h1>;

const Router = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact component={Home} path="/" />
      <Route exact component={Signup} path="/signup" />
      <Route exact component={Login} path="/login" />
      <Route exact component={AddProject} path="/add-project" />
    </Switch>
  </BrowserRouter>
);

export default Router;
