import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
    window.location.href = "/";
  }

  register(username, email, password, role) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
      role,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }

  findByTitle(username) {
    return axios.get(API_URL + `sp?username=${username}`);
  }

  getAll() {
    return axios.get(API_URL + "sp");
  }

  sp_update(id, data) {
    return axios.put(API_URL + `sp/${id}/settings-profile`, data);
  }

  update(id, data) {
    return axios.put(API_URL + `${id}/settings-profile`, data);
  }

  get(id) {
    return axios.get(API_URL + `sp/${id}`);
  }

  create_proj(data) {
    return axios.post(API_URL + "project", data);
  }

  update_proj(id, data) {
    return axios.put(API_URL + `project/${id}`, data);
  }

  get_proj(id) {
    return axios.get(API_URL + `project?owner=${id}`);
  }

  create_cl(data) {
    return axios.post(API_URL + "client", data);
  }

  update_cl(id, data) {
    return axios.put(API_URL + `client/${id}`, data);
  }

  get_cl(id) {
    return axios.get(API_URL + `client?owner=${id}`);
  }

  create_q(data) {
    return axios.post(API_URL + "qualification", data);
  }

  update_q(id, data) {
    return axios.put(API_URL + `qualification/${id}`, data);
  }

  get_q(id) {
    return axios.get(API_URL + `qualification?owner=${id}`);
  }

  getlocation(location) {
    return axios.get(API_URL + `sp/location?location=${location}`);
  }

  getservice(service) {
    return axios.get(API_URL + `sp/service?service=${service}`);
  }
}

export default new AuthService();