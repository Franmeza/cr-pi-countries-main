import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { detailContainer,allDetail, imageContainer, infoContainer } from "./Detail.module.css";
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
            name: data.name.toUpperCase(),
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
    <div className={allDetail}>
      <div className={detailContainer}>
        <div className={imageContainer}>
          <img
          
            src={countryDetails.coatOfArms}
            alt="imagen"
          />
          <h3>{countryDetails.name}</h3>
        </div>
        <div className={infoContainer}>
          <div>
            <span>
              <strong>Continent: </strong>
            </span>
            <p>
              {countryDetails.continent}
            </p>
            <span>
              <strong>Capital: </strong>
            </span>
            <p>
              {countryDetails.capital}
            </p>
            <span>
              <strong>Subregion: </strong>
            </span>
            <p>
              {countryDetails.subregion}
            </p>
          </div>
        <div>
          <span>
            <strong>Area: </strong>
          </span>
          <p>
            {countryDetails.area}
          </p>
          <span>
            <strong>Population: </strong>
          </span>
          <p>
            {countryDetails.population}
          </p>
          <span>
            <strong>Activites: </strong>
          </span>
          <p>
            {countryDetails.activities?.length !== 0 ? (
              <span>
                {countryDetails.activities?.map((activity) => {
                  return activity.name + ", ";
                })}
              </span>
            ) : (
              "No activities registered"
            )}
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
