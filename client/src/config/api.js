import axios from "axios";

// Set config defaults when creating the instance
export const API = axios.create({
  baseURL: "https://land-tick.herokuapp.com/api",
});

export const setAuthToken = (token) => {
  API.defaults.headers.common["Authorization"] = `${token}`;
};
