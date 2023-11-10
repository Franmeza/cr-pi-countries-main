import axios from "axios";

export const FETCH_INFO = "FETCH_INFO";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const FILTER_COUNTRIES = "FILTER_COUNTRIES";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_POPULATION = "ORDER_BY_POPULATION";
export const REMOVE_FILTER = "REMOVE_FILTER";

const { VITE_URL } = import.meta.env;

export const fetchCountriesInfo = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${VITE_URL}/countries`);
    return dispatch({
      type: FETCH_INFO,
      payload: data,
    });
  } catch (error) {
    throw new Error("Error fetching data");
  }
};

export const getActivities = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${VITE_URL}/activities`);
    return dispatch({
      type: GET_ACTIVITIES,
      payload: data,
    });
  } catch (error) {
    throw new Error(error.response.data);
  }
};

export const filterCountries = (name) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${VITE_URL}/countries?name=${name}`);

    return dispatch({
      type: FILTER_COUNTRIES,
      payload: data,
    });
  } catch (error) {
    throw Error(error.message);
  }
};

export const filterByContinent = (continent) => {
  return {
    type: FILTER_BY_CONTINENT,
    payload: continent,
  };
};

export const filterByActivity = (activity) => {
  return {
    type: FILTER_BY_ACTIVITY,
    payload: activity,
  };
};

export const orderByName = (order) => {
  return {
    type: ORDER_BY_NAME,
    payload: order,
  };
};

export const orderByPopulation = (order) => {
  return {
    type: ORDER_BY_POPULATION,
    payload: order,
  };
};

export const removeFilter = () => {
  return {
    type: REMOVE_FILTER,
  };
};
