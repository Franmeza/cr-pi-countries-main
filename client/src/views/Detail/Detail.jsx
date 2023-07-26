import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Detail() {
  const { id } = useParams();
  const [countryDetails, setCountryDetails] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3001/countries/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCountryDetails({
            name: data.name,
            coatOfArms: data.coatOfArms,
            continent: data.continent,
            capital: data.capital,
            subregion: data.subregion,
            area: data.area,
            population: data.population,
            activities: data.Activities,
          });
        }
      })
      .catch((error) => {
        throw Error({ error: error.response.data });
      });
  }, [id]);

  return (
    <div>
      <img src={countryDetails.coatOfArms} alt="imagen" />
      <section>
        <h2>
          <strong>NAME</strong>
        </h2>
        <h2>{countryDetails.name}</h2>
        <h2>
          <strong>Continent: </strong>
          {countryDetails.continent}
        </h2>
        <h2>
          <strong>Capital: </strong>
          {countryDetails.capital}
        </h2>
        <h2>
          <strong>Subregion: </strong>
          {countryDetails.subregion}
        </h2>
        <h2>
          <strong>Area: </strong>
          {countryDetails.area}
        </h2>
        <h2>
          <strong>Population: </strong>
          {countryDetails.population}
        </h2>
        <h2><strong>Activites: </strong>
        {countryDetails.activities?.length !== 0 ? 
        <span>
          {countryDetails.activities?.map((activity) => {
            return activity.name + ", ";
          })}
        </span>:"No activities registered"}</h2>
      </section>
    </div>
  );
}

export default Detail;
