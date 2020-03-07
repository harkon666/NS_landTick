import { THIS_USER } from "../config/constants";

const initialState = {
  data: [],
  isLogin: false,
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${THIS_USER}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${THIS_USER}_FULFILLED`:
      return {
        ...state,
        isLogin: true,
        data: action.payload,
        loading: false
      };
    case `${THIS_USER}_REJECTED`:
      return {
        ...state,
        isLogin: false,
        error: true,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
