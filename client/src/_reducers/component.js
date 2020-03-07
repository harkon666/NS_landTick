import { ROUTING_ADMIN } from "../config/constants";

const initialState = {
  data: {
    listTransaction: true,
    addTicket: false
  },
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ROUTING_ADMIN:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
