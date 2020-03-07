import { GET_TICKET, ADD_TICKET, FIND_TICKET_LIKE } from "../config/constants";

const initialState = {
  data: [],
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_TICKET}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_TICKET}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case `${GET_TICKET}_REJECTED`:
      return {
        ...state,
        error: true,
        loading: false
      };
    case `${ADD_TICKET}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${ADD_TICKET}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case `${ADD_TICKET}_REJECTED`:
      return {
        ...state,
        error: true,
        loading: false
      };
    case `${FIND_TICKET_LIKE}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${FIND_TICKET_LIKE}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case `${FIND_TICKET_LIKE}_REJECTED`:
      return {
        ...state,
        error: true,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
