import axios from "axios";

export const FETCH_INFO = "FETCH_INFO";

const URL = "http://localhost:3001/countries";

export const fetchCountriesInfo = () => async (dispatch) => {
  try {
    const { data } = await axios.get(URL);

    return dispatch({
      type: FETCH_INFO,
      payload: data,
    });
  } catch (error) {
    throw new Error("Error fetching data");
  }
};
