import axios from "axios";

// const dotenv = require("dotenv");
// dotenv.config(); 
const api = axios.create({
    baseURL : "https://backend.vupop.io/",
  });
 export default api; 