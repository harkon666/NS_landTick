import { REGISTER, LOGIN } from "../config/constants";

const initialState = {
  data: [],
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${REGISTER}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${REGISTER}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case `${REGISTER}_REJECTED`:
      return {
        ...state,
        error: true,
        loading: false
      };
    case `${LOGIN}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${LOGIN}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case `${LOGIN}_REJECTED`:
      return {
        ...state,
        data: action.payload,
        error: true,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
