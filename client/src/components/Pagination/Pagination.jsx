import PropTypes from "prop-types";
import { paginationButtons, pageSelected } from "./Pagination.module.css";

function Pagination({ handlePageChange, totalPages, currentPage }) {
    
  return (
    

    <div className={paginationButtons}>
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          className={currentPage === index + 1 ? pageSelected : null}
          key={index + 1}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
   
  );
}

Pagination.propTypes = {
  handlePageChange: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
};
export default Pagination;
