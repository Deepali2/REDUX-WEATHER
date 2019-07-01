import { FETCH_WEATHER, FETCH_WEATHER_ERROR } from "../constants";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // return [action.payload.data].concat(state);
      return [action.payload.data, ...state];
  }
  return state;
}
