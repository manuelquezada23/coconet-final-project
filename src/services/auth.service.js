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
    return axios.put(API_URL + `sp/${id}/settings-profile/editing`, data);
  }

  update(id, data) {
    return axios.put(API_URL + `${id}/settings-profile`, data);
  }

  get(id) {
    return axios.get(API_URL + `sp/${id}`);
  }

  getlocation(location) {
    return axios.get(API_URL + `sp/location?location=${location}`);
  }

  getservice(service) {
    return axios.get(API_URL + `sp/service?service=${service}`);
  }
}

export default new AuthService();