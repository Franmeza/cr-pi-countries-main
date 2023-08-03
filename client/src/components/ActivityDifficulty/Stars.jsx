import PropTypes from "prop-types";
import { star, filledStar } from "./Stars.module.css";

const Stars = ({ filled }) => {
  const starClasses = [star, filled ? filledStar : ""].join(" ");
  return <span className={starClasses}>&#9733;</span>;
};

Stars.propTypes = {
  filled: PropTypes.bool.isRequired,
};

export default Stars;
