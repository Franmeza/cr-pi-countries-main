import { FETCH_INFO, FILTER_COUNTRIES, FILTER_BY_CONTINENT, ORDER_BY_NAME } from "./actions";

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

    case FILTER_BY_CONTINENT:
      return {...state, countries: state.allCountries.filter((country)=>{
        if(payload === 'Americas'){
          return country.continent === "South America" || country.continent === "North America"
        }else{

          return country.continent === payload
        }
      })}

    case ORDER_BY_NAME:
      return {
        ...state,
        countries: state.allCountries.sort((a, b) => {
          if (payload === "A") return a.name - b.name;

          if (payload === "D") return b.name - a.name;

          return 0;
          //se peude resumir  payload ===A ? a.id - b.id : b.id - a.id
        }),
      };
      
    default:
      return {...state}
  }
}
