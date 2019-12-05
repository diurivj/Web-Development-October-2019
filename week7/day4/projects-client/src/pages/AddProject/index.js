import React, { Component } from "react";
import ProjectsService from "../../services/ProjectsService";

const projectsService = new ProjectsService();

export default class AddProject extends Component {
  state = {
    title: "",
    description: ""
  };
  inputChange = ({ target: { value, name } }) => {
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  addProject = async e => {
    e.preventDefault();
    const { title, description } = this.state;
    const project = await projectsService.createProject({ title, description });
    console.log(project);
    alert("proyecto creado");
    this.setState({
      title: "",
      description: ""
    });
  };

  render() {
    return (
      <>
        <h1>App project</h1>
        <form onSubmit={this.addProject}>
          <label htmlFor="title">Title</label>
          <input
            onChange={this.inputChange}
            value={this.state.title}
            type="text"
            name="title"
            id="title"
          />
          <label htmlFor="description">Description</label>
          <input
            onChange={this.inputChange}
            value={this.state.description}
            type="text"
            name="description"
            id="description"
          />
          <input type="submit" value="Add Project" />
        </form>
      </>
    );
  }
}
