import { FETCH_INFO } from "./actions";

const initialState = {
  countries: [],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_INFO:
      return { ...state, countries: payload };
    default:
      return {...state}
  }
}
