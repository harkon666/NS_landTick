import { API, setAuthToken } from "../config/api";
import {
  ORDER_TICKET,
  MY_TICKET,
  UPLOAD_PAYMENT,
  CHOOSE_TICKET,
  ALL_ORDER,
  APPROVE,
} from "../config/constants";

export const orderTicket = (load) => {
  const token = localStorage.getItem("jwToken");
  return {
    type: ORDER_TICKET,
    payload: async () => {
      console.log(load, "woi load");
      setAuthToken(token);
      const res = await API.post("/buy", {
        ticket_id: load.ticket_id,
        qty: load.qty,
        totalPrice: load.totalPrice,
      });
      const { data } = res.data;
      return data;
    },
  };
};

export const myTicket = () => {
  const token = localStorage.getItem("jwToken");
  return {
    type: MY_TICKET,
    payload: async () => {
      setAuthToken(token);
      const res = await API.get("/myTicket");
      const { data } = res.data;
      return data;
    },
  };
};

export const uploadPayment = (formData) => {
  const token = localStorage.getItem("jwToken");
  console.log(formData, "woi file");
  return {
    type: UPLOAD_PAYMENT,
    payload: async () => {
      setAuthToken(token);
      const res = await API.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const { data } = res.data;
      return data;
    },
  };
};

export const chooseTicket = (id) => {
  const token = localStorage.getItem("jwToken");
  return {
    type: CHOOSE_TICKET,
    payload: async () => {
      setAuthToken(token);
      const res = await API.get(`/myTicket/${id}`);
      const { data } = res.data;
      return data;
    },
  };
};

export const allOrder = () => {
  return {
    type: ALL_ORDER,
    payload: async () => {
      const res = await API.get("/orders");
      const { data } = res.data;
      return data;
    },
  };
};

export const approvePayment = (id, status) => {
  const token = localStorage.getItem("jwToken");
  return {
    type: APPROVE,
    payload: async () => {
      setAuthToken(token);
      const res = await API.put(`/order/${id}`, {
        status,
      });
      const { data } = res.data;
      return data;
    },
  };
};
