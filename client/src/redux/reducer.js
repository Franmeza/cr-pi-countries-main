import { FETCH_INFO, FILTER_COUNTRIES } from "./actions";

const initialState = {
  countries: [],
  allCountries: [],
};

export default function reducer(state = initialState, { type, payload }) {
 
  switch (type) {
    case FETCH_INFO:
      return { ...state, allCountries: payload ,countries: payload,  };

    case FILTER_COUNTRIES:
      return { ...state, countries: payload };
    default:
      return {...state}
  }
}
