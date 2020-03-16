import { API, setAuthToken } from "../config/api";
import { GET_STATION } from "../config/constants";

export const getStation = () => {
  return {
    type: GET_STATION,
    payload: async () => {
      const res = await API.get("/station");
      const { data } = res.data;
      return data;
    }
  };
};
