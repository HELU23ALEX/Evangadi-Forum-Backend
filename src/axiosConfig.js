import axios from "axios";
const axiosBase = axios.create({
  // baseURL: "http://localhost:5500/api",
  baseURL: "https://evangadi-forum-backend-2-ddph.onrender.com/api",
});

export default axiosBase;
