import { REGISTER, LOGIN } from "../config/constants";
import { API } from "../config/api";

export const register = regis => {
  const { name, identity, email, password, gender, phone, address } = regis;
  return {
    type: REGISTER,
    payload: async () => {
      const res = await API.post("/register", {
        name,
        identity,
        email,
        password,
        gender,
        phone,
        address
      });
      const data = res.data;
      const token = `Bearer ${data.token}`;
      if (data.message === "success") {
        localStorage.setItem("jwToken", token);
        API.defaults.headers.common["Authorization"] = token;
        return data;
      } else {
        return data;
      }
    }
  };
};

export const login = (email, password) => {
  return {
    type: LOGIN,
    payload: async () => {
      const res = await API.post("/login", {
        email,
        password
      });
      const data = res.data;
      const token = `Bearer ${data.token}`;
      if (data.message === "success") {
        localStorage.setItem("jwToken", token);
        API.defaults.headers.common["Authorization"] = token;
        return data;
      } else {
        return data;
      }
    }
  };
};
