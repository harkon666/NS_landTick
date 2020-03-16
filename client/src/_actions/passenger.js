import { API, setAuthToken } from "../config/api";
import { ADD_PASSENGER } from "../config/constants";

export const addPassenger = (load, id) => {
  const token = localStorage.getItem("jwToken");
  return {
    type: ADD_PASSENGER,
    payload: async () => {
      setAuthToken(token);
      const res = await API.post("/passengers", { load, id });
      const { data } = res.data;
      return data;
    }
  };
};
