// Utility for axios base URL
import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE || "/backend",
});

export default api;
