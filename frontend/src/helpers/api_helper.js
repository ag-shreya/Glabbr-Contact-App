import axios from "axios";

//apply base url for axios
const REACT_APP_URL =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_DEV_URL
    : process.env.REACT_APP_DEV_URL;

const axiosApi = axios.create({
  baseURL: REACT_APP_URL,
});

axios.interceptors.request.use(function (config) {
  return config;
});

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export async function get(url, config) {
  return await axiosApi
    .get(url, {
      ...config,
    })
    .then((response) => response.data);
}

export async function post(url, config) {
  return await axiosApi
    .post(url, {
      ...config,
    })
    .then((response) => response.data);
}
