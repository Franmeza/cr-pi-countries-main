import {
  FETCH_INFO,
  GET_ACTIVITIES,
  FILTER_COUNTRIES,
  FILTER_BY_CONTINENT,
  FILTER_BY_ACTIVITY,
  ORDER_BY_NAME,
  ORDER_BY_POPULATION,
} from "./actions";

const initialState = {
  countries: [],
  allCountries: [],
  activities: [],
  allActivities: [],
};

export default function reducer(state = initialState, { type, payload }) {
 
  switch (type) {
    case FETCH_INFO:
      return { ...state, allCountries: payload, countries: payload };

    case FILTER_BY_ACTIVITY:
      return {
        ...state,
        countries: state.allCountries.filter((country) => {
          return country.Activities?.find((activity) => {
            return activity.name === payload;
          });
        }), 
       
      };

    case GET_ACTIVITIES:
      return { ...state, allActivities: payload, activities: payload };

    case FILTER_COUNTRIES:
      return { ...state, countries: payload };

    case FILTER_BY_CONTINENT:
      return {
        ...state,
        countries: state.allCountries.filter((country) => {
          if (payload === "Americas") {
            return (
              country.continent === "South America" ||
              country.continent === "North America"
            );
          } else {
            return country.continent === payload;
          }
        }),
      };

    // case FILTER_BY_ACTIVITY:
    //   return {
    //     ...state,
    //     countries: state.allCountries.filter((country)=>{
    //       cou
    //     })
    //   }

    case ORDER_BY_NAME:
      payload === "A"
        ? state.countries.sort((a, b) => {
            if (a.name > b.name) return 1;
            if (b.name > a.name) return -1;
            return 0;
          })
        : state.countries.sort((a, b) => {
            if (a.name > b.name) return -1;
            if (b.name > a.name) return 1;
            return 0;
          });
      return {
        ...state,
        countries: state.countries,
      };

    case ORDER_BY_POPULATION:
      return {
        ...state,
        countries: state.countries.sort((a, b) => {
          if (payload === "A") return a.population - b.population;
          if (payload === "D") return b.population - a.population;
          return 0;
        }),
      };

    default:
      return { ...state };
  }
}
