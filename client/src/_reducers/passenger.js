import { ADD_PASSENGER } from "../config/constants";

const initialState = {
  data: [],
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${ADD_PASSENGER}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${ADD_PASSENGER}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case `${ADD_PASSENGER}_REJECTED`:
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
