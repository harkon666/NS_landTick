import { THIS_USER } from "../config/constants";
import { API, setAuthToken } from "../config/api";

export const thisUser = () => {
  const token = localStorage.getItem("jwToken");
  return {
    type: THIS_USER,
    payload: async () => {
      setAuthToken(token);
      const res = await API.get("/this_user");
      const { data } = res.data;
      return data;
    }
  };
};
