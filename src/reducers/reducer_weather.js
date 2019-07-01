import { FETCH_WEATHER } from "../constants";

export default function(state = [], action) {
  if (action.error) {
    alert("City not found! Check city spelling or choose another city.");
    return state;
  }
  switch (action.type) {
    case FETCH_WEATHER:
      // return [action.payload.data].concat(state);
      return [action.payload.data, ...state];
  }
  return state;
}
