import axios from "axios";

const api = axios.create({
  baseURL: "http://200.129.13.73:3333"
});

export default api;
