import { GET_TYPE } from "../config/constants";

const initialState = {
  data: [],
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_TYPE}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_TYPE}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case `${GET_TYPE}_REJECTED`:
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
