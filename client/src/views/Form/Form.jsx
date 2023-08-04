import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  mainContainer,
  formContainer,
  innerContainer,
  title,
  nameField,
  difficultyField,
  durationField,
  seasonField,   
  selectedCountriesContainer,
  countryDiv,
  submitButton,
  countriesSelect,
} from "./Form.module.css";
import validate from "./validation";

const seasonsOptions = ["Spring", "Summer", "Autum", "Winter"];
const URL = "http://localhost:3001/activities";

const Form = () => {
  const countries = useSelector((state) => state.allCountries);
  // const [selectedCountries, setSelectedCountries] = useState([])

  const [formData, setFormData] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: "",
  })
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors(
      validate({
        ...formData,
        [name]: value
      })
    )
  };

  const handleSelectedCountries = (e) => {
    const value =  e.target.value   
    setFormData({
      ...formData,
      countries: [...formData.countries, value],
    });
    setErrors(
      validate({
        ...formData,
        countries: [...formData.countries, value],
      })
    )
  };

  const onClose = (ctry) => {
    const deletedCountry = formData.countries.filter((country) => {      
      return ctry !== country;
    });

    setFormData({
      ...formData,
      countries: deletedCountry,
    });
    setErrors(
      validate({
        ...formData,
        countries: deletedCountry,
      })
    )
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(URL, formData)
      .then((response) => console.log(response))
      .catch((error) => console.log(error.response.data));
  };

  return (
    <div className={mainContainer}>
    <form className={formContainer} onSubmit={handleSubmit}>
      <div className={innerContainer}>
        <p className={title}>Create an Activity</p>
        <div className={nameField}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"            
            value={formData.name}
            placeholder="Activity name"
            onChange={handleInputChange}           
          />
        {errors.name ? <span>{errors.name}</span> : null}
        </div>
        <div className={difficultyField}>
          <label htmlFor="difficulty">Difficulty:</label>
          <input
            type="text"
            id="difficulty"
            name="difficulty"
            placeholder="Enter a number between 1 and 5"
            value={formData.difficulty}
            onChange={handleInputChange}            
          />
          {errors.difficulty ? <span>{errors.difficulty}</span>:null}
        </div>
        <div className={durationField}>
          <label htmlFor="duration">Duration (hh:mm):</label>
          <input
            type="time"
            id="duration"
            name="duration"            
            value={formData.duration}
            onChange={handleInputChange}
          />
         {errors.duration ? <span>{errors.duration}</span>: null} 
        </div>
        <div className={seasonField}>
          <label>Season:</label>
          {seasonsOptions.map((season) => (
            <div key={season}>
              <input
                type="radio"
                id={season}
                name="season"
                value={season}
                checked={formData.season === season}
                onChange={handleInputChange}
              />
              <label htmlFor={season}>{season}</label>
            </div>
          ))}
          {errors.season ? <span>{errors.season}</span>: null}
        </div>
        <div className={countriesSelect}>
          <label>Add this activity to:</label>

          <select
            name="countries"
            id="country"
            onChange={handleSelectedCountries}
          >
            {countries.map((country, index) => (
              <option key={index} value={country.id}>
                {country.name}
              </option>
            ))}
          </select>
          {errors.countries? <span>{errors.countries}</span>: null}
        </div>
        <div className={selectedCountriesContainer}>
          {formData.countries.map((country, index) => (
            <div className={countryDiv} key={index}>
              {country}
              <button  value={country.id} onChange={handleSelectedCountries} onClick={() => onClose(country)}>x</button>
            </div>
          ))}
        </div>
        <button className={submitButton} type="submit">Submit</button>
      </div>
    </form>
    </div>
  );
};

export default Form;
