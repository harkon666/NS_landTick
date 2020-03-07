import { API } from "../config/api";
import { GET_TYPE } from "../config/constants";

export const getType = () => {
  return {
    type: GET_TYPE,
    payload: async () => {
      const res = await API.get("/type");
      console.log(res, "woi asu");
      const { data } = res.data;
      return data;
    }
  };
};
