import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5025",
});

export default api;