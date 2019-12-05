import React, { Component } from "react";
import ProjectsService from "../../services/projectsService";
import { Link } from "react-router-dom";
import ProjectCards from "./ProjectCards";
const projectsService = new ProjectsService();

export default class Home extends Component {
  state = {
    projects: []
  };
  async componentDidMount() {
    const {
      data: { projects }
    } = await projectsService.getProjects();
    this.setState({
      projects
    });
  }

  render() {
    return (
      <>
        <h1>Projects</h1>
        <Link to="/add-project">
          <button>Add Project</button>
        </Link>
        <ProjectCards projects={this.state.projects} />
      </>
    );
  }
}
