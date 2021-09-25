import axios from "axios";

const httpClient = axios.create();

httpClient.interceptors.request.use(async function (config) {
  config.baseURL = process.env.REACT_APP_API_URL;
  return config;
});

export default httpClient;
