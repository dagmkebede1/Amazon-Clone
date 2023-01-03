import axios from "axios";
const instance = axios.create({
  baseURL: "https://amazon-backend.up.railway.app/",
});
export default instance;
