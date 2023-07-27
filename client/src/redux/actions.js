import axios from "axios";

export const FETCH_INFO = "FETCH_INFO";
export const GET_ACTIVITIES = "GET_ACTIVITIES"
export const FILTER_COUNTRIES = "FILTER_COUNTRIES"
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT"
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY"
export const ORDER_BY_NAME = "ORDER_BY_NAME"
export const ORDER_BY_POPULATION = "ORDER_BY_POPULATION"

const URL = "http://localhost:3001";

export const fetchCountriesInfo = () => async (dispatch) => {
  try {
    
    const { data } = await axios.get(`${URL}/countries`)
    return dispatch({
      type: FETCH_INFO,
      payload: data,
    });
  } catch (error) {
    throw new Error("Error fetching data");
  }
};

export const getActivities =()=>async(dispatch)=>{
  try {
    const {data} = await axios.get(`${URL}/activities`)
    return dispatch({
      type: GET_ACTIVITIES,
      payload: data
    })
  } catch (error) {
    throw new Error({error: error.message})
  }
}

export const filterCountries = (name) => async (dispatch) =>{
  try {
    
    const { data } = await axios.get(`${URL}?name=${name}`) 
    
    return dispatch({
      type: FILTER_COUNTRIES,
      payload: data,
    });
  } catch (error) {
    return {error: error.message};
  }
}

export const filterByContinent = (continent)=>{  
  return{
    type: FILTER_BY_CONTINENT,
    payload: continent
  }
}
export const filterByActivity = (activity)=>{  
  return{
    type: FILTER_BY_ACTIVITY,
    payload: activity
  }
}

export const orderByName = (order) =>{  
  return{
    type: ORDER_BY_NAME,
    payload: order
  }
}

export const orderByPopulation = (order) =>{
   return{
    type: ORDER_BY_POPULATION,
    payload: order
  }
}
