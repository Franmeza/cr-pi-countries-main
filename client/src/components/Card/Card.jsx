import PropTypes from "prop-types";

import { cardContainer, nameTitle, imageContainer,link } from "./Card.module.css";
import { Link } from "react-router-dom";
function Card({ id, name, continent, flagImage }) {
  return (
    <div className={cardContainer}>
      <div className={imageContainer}>
        <img width="100%" height="180px" src={flagImage} alt={name} />
      </div>
      <Link className={link} to={`/detail/${id}`}>
        <h3 className={nameTitle}>{name.toUpperCase()}</h3>
      </Link>
      <p>&#x1F4CD; {continent}</p>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  flagImage: PropTypes.string.isRequired,
  continent: PropTypes.string.isRequired, 
};

export default Card;
