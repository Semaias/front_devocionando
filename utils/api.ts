import axios from "axios";

const api = axios.create({
  baseURL: "https://devocionando-api-production.up.railway.app/", // Substitua pela URL correta da sua API
});

export default api;