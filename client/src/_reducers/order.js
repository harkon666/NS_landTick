import {
  ORDER_TICKET,
  MY_TICKET,
  UPLOAD_PAYMENT,
  CHOOSE_TICKET,
  ALL_ORDER,
  APPROVE
} from "../config/constants";

const initialState = {
  data: [],
  myTicket: [],
  upload: [],
  chooseTicket: [],
  allData: [],
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${ORDER_TICKET}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${ORDER_TICKET}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case `${ORDER_TICKET}_REJECTED`:
      return {
        ...state,
        error: true,
        loading: false
      };
    case `${MY_TICKET}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${MY_TICKET}_FULFILLED`:
      return {
        ...state,
        myTicket: action.payload,
        loading: false
      };
    case `${MY_TICKET}_REJECTED`:
      return {
        ...state,
        error: true,
        loading: false
      };
    case `${UPLOAD_PAYMENT}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${UPLOAD_PAYMENT}_FULFILLED`:
      return {
        ...state,
        upload: action.payload,
        loading: false
      };
    case `${UPLOAD_PAYMENT}_REJECTED`:
      return {
        ...state,
        error: true,
        loading: false
      };
    case `${CHOOSE_TICKET}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${CHOOSE_TICKET}_FULFILLED`:
      return {
        ...state,
        chooseTicket: action.payload,
        loading: false
      };
    case `${CHOOSE_TICKET}_REJECTED`:
      return {
        ...state,
        error: true,
        loading: false
      };
    case `${ALL_ORDER}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${ALL_ORDER}_FULFILLED`:
      return {
        ...state,
        allData: action.payload,
        loading: false
      };
    case `${ALL_ORDER}_REJECTED`:
      return {
        ...state,
        error: true,
        loading: false
      };
    case `${APPROVE}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${APPROVE}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case `${APPROVE}_REJECTED`:
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
