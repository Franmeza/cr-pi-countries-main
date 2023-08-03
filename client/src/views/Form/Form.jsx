import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectedCountriesContainer, countryDiv } from "./Form.module.css";

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSeasonChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      season: value,
    });
  };

  const handleSelectedCountries = (e) => {
    setFormData({
      ...formData,
      countries: [...formData.countries, e.target.value],
    });
  };

  const onClose = (ctry) => {
    const deletedCountry = formData.countries.filter((country) => {
      console.log(country);
      return ctry !== country;
    });

    setFormData({
      ...formData,
      countries: deletedCountry,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(URL, formData)
      .then((response) => console.log(response))
      .catch((error) => console.log(error.response.data));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="difficulty">Difficulty:</label>
        <input
          type="text"
          id="difficulty"
          name="difficulty"
          value={formData.difficulty}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="duration">Duration:</label>
        <input
          type="time"
          id="duration"
          name="duration"
          value={formData.duration}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Season:</label>
        {seasonsOptions.map((season) => (
          <div key={season}>
            <input
              type="radio"
              id={season}
              name="season"
              value={season}
              checked={formData.season === season}
              onChange={handleSeasonChange}
            />
            <label htmlFor={season}>{season}</label>
          </div>
        ))}
      </div>
      <div>
        <label>Add this activity to:</label>
        <br />
        <select name="country" id="country" onChange={handleSelectedCountries}>
          {countries.map((country, index) => (
            <option key={index} value={country.id}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
      <div className={selectedCountriesContainer}>
        {formData.countries.map((country, index) => (
          <div className={countryDiv} key={index}>
            {country}
            <button onClick={() => onClose(country)}>x</button>
          </div>
        ))}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
