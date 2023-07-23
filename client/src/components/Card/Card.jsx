import PropTypes from "prop-types";

function Card({ name, flagImage }) {
  return(
    <div>
      <img height="150px" width="250" src={flagImage} alt={name} />
    </div>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  flagImage: PropTypes.string.isRequired,
  // continent: PropTypes.string.isRequired,
  // capital: PropTypes.string.isRequired,
  // subregion: PropTypes.string.isRequired,
  // area: PropTypes.float.isRequired,
  // population: PropTypes.number.isRequired,
};

export default Card;
