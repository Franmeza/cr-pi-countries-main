import PropTypes from "prop-types";
import { cardContainer, nameTitle, imageContainer } from "./Card.module.css";

function Card({ name, continent, flagImage }) {
  return (
    <div className={cardContainer}>
      <div className={imageContainer}>
        <img height="150px" src={flagImage} alt={name} />
      </div>
      <h3 className={nameTitle}>{name.toUpperCase()}</h3>
      <p>{continent}</p>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  flagImage: PropTypes.string.isRequired,
  continent: PropTypes.string.isRequired,
  // capital: PropTypes.string.isRequired,
  // subregion: PropTypes.string.isRequired,
  // area: PropTypes.float.isRequired,
  // population: PropTypes.number.isRequired,
};

export default Card;
