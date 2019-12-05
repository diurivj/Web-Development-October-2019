import axios from "axios";

export default class ProjectService {
  baseUrl = "http://localhost:3000";
  projects = axios.create({
    baseURL: this.baseUrl,
    withCredentials: true
  });
  getProjects() {
    return this.projects.get("/projects");
  }
  createProject(projectData) {
    return this.projects.post("/projects", projectData);
  }
}
