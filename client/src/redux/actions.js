import axios from "axios";

export const FETCH_INFO = "FETCH_INFO";
export const FILTER_COUNTRIES = "FILTER_COUNTRIES"

const URL = "http://localhost:3001/countries";

export const fetchCountriesInfo = () => async (dispatch) => {
  try {
    
    const { data } = await axios.get(URL)
    return dispatch({
      type: FETCH_INFO,
      payload: data,
    });
  } catch (error) {
    throw new Error("Error fetching data");
  }
};

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