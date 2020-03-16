import { API } from "../config/api";
import { GET_TICKET, ADD_TICKET, FIND_TICKET_LIKE } from "../config/constants";

export const getTicket = () => {
  return {
    type: GET_TICKET,
    payload: async () => {
      const res = await API.get("/ticket");
      const { data } = res.data;
      return data;
    }
  };
};

export const addTicket = load => {
  return {
    type: ADD_TICKET,
    payload: async () => {
      const res = await API.post("/ticket", {
        nameTrain: load.nameTrain,
        type_id: load.type_id,
        dateStart: load.dateStart,
        startStation: load.startStation,
        startTime: load.startTime,
        destinationStation: load.destinationStation,
        arrivalTime: load.arrivalTime,
        price: load.price,
        qty: load.qty
      });
      const { data } = res.data;
      return data;
    }
  };
};

export const findTicketLike = (start, end, date) => {
  return {
    type: FIND_TICKET_LIKE,
    payload: async () => {
      const res = await API.get(
        `/order?start_station=${start}&end_station=${end}&date=${date}`
      );
      const { data } = res.data;
      return data;
    }
  };
};
