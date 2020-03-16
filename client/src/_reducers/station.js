import { GET_STATION } from "../config/constants";

const initialState = {
  data: [],
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_STATION}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_STATION}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case `${GET_STATION}_REJECTED`:
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
