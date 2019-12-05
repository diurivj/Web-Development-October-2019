import axios from "axios";

export default class AuthService {
  baseUrl = "http://localhost:3000";
  projects = axios.create({
    baseURL: this.baseUrl,
    withCredentials: true
  });
  login(userData) {
    return this.projects.post("/auth/login", userData);
  }
}
