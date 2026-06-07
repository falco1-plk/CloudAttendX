import axios from "axios";

const API = axios.create({
  baseURL: "https://cloudattendx-backend.onrender.com",
});

export default API;