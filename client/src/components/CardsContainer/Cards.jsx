import { countriesContainer } from "./Cards.module.css";
import Card from "../Card/Card";
import PropTypes from "prop-types";

function Cards({ countriesPerPage }) {
  return (
    <div className={countriesContainer}>
      {countriesPerPage.map(
        ({
          id,
          name,
          flagImage,
          continent,
          capital,
          subregion,
          area,
          population,
        }) => (
          <Card
            key={id}
            id={id}
            name={name}
            flagImage={flagImage}
            continent={continent}
            capital={capital}
            subregion={subregion}
            area={area}
            population={population}
          />
        )
      )}
    </div>
  );
}

Cards.propTypes = {
  countriesPerPage: PropTypes.array.isRequired,
};
export default Cards;
