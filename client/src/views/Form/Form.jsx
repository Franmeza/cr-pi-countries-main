import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  mainContainer,
  formContainer,
  innerContainer,
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
import { getActivities, fetchCountriesInfo } from "../../redux/actions";

const seasonsOptions = ["Spring", "Summer", "Autum", "Winter"];
const { VITE_URL } = import.meta.env;

const Form = () => {
  const countries = useSelector((state) => state.allCountries);
  const dispatch = useDispatch();

  const sortedCountries = [...countries].sort((a, b) => {
    if (a.name > b.name) return 1;
    if (b.name > a.name) return -1;
    return 0;
  });

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
    duplicatedActivity: "",
  });

  useEffect(() => {
    if (countries.length === 0) dispatch(fetchCountriesInfo());
  }, [dispatch, countries.length]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors(
      validate({
        ...formData,
        [name]: value,
      })
    );
  };

  const handleSelectedCountries = (e) => {
    const value = e.target.value;
    const property = e.target.name;

    let flag = false;
    countries.forEach((country) => {
      if (country.id === value) {
        country.Activities.forEach((activity) => {
          if (activity.name === formData.name) {
            flag = true;
            validate({
              ...formData,
              duplicatedActivity: flag,
              country: country.name,
            });
          }
        });
      }
    });
    if (!flag) {
      if (value === "") return;
      setFormData({
        ...formData,
        [property]: [...formData.countries, value],
      });
      setErrors(
        validate({
          ...formData,
          [property]: [...formData.countries, value],
        })
      );
    } else {
      return;
    }
  };

  const onDeleteSelection = (ctry) => {
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
      }) //
    );
  };

  const handleSubmit = async (e) => {
    console.log(errors);
    e.preventDefault();
    if (Object.keys(errors).length !== 0) {
      alert("Please fill out missing fields");
    } else {
      await axios
        .post(`${VITE_URL}/activities`, formData)
        .then((response) => alert(response.data))
        .catch((error) => alert(error.response.data));

      dispatch(getActivities()); // to update activities in my global state after creation
    }
  };

  return (
    <div className={mainContainer}>
      <form className={formContainer} onSubmit={handleSubmit}>
        <div className={innerContainer}>
          <h4>Create an Activity</h4>
          <div className={nameField}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              placeholder="sightseeing, running, diving..."
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
              placeholder="1, 2, 3, 4, or 5"
              value={formData.difficulty}
              onChange={handleInputChange}
            />
            {errors.difficulty !== "" ? <span>{errors.difficulty}</span> : null}
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
            {errors.duration ? <span>{errors.duration}</span> : null}
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
                  onChange={handleInputChange}
                />
                <label htmlFor={season}>{season}</label>
              </div>
            ))}
            {errors.season ? <span>{errors.season}</span> : null}
          </div>
          <div className={countriesSelect}>
            <label>Add this activity to:</label>

            <select
              name="countries"
              id="country"
              onChange={handleSelectedCountries}
            >
              <option value="">Select country/ies</option>
              {sortedCountries.map((country, index) => (
                <option key={index} value={country.id}>
                  {country.name}
                </option>
              ))}
            </select>
            {errors.countries ? <span>{errors.countries}</span> : null}
          </div>
          <div className={selectedCountriesContainer}>
            {formData.countries.map((country, index) => (
              <div className={countryDiv} key={index}>
                {country}
                <button
                  onChange={handleSelectedCountries}
                  onClick={() => onDeleteSelection(country)}
                >
                  x
                </button>
              </div>
            ))}
          </div>
          <button className={submitButton} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
