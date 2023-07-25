import Cards from "../../components/CardsContainer/Cards";
import Pagination from "../../components/Pagination/Pagination";
import SidePanel from "../../components/SidePanel/SidePanel";
import { homeContainer, cardsPagination } from "./Home.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";

function Home() {
  const countries = useSelector((state) => state.countries);
  // const allCountries = useSelector((state)=>state.allCountries)
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

const totalPages =  Math.ceil(countries.length / itemsPerPage)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const countriesPerPage =  countries.slice(startIndex, endIndex)

  return (
    <div className={homeContainer}>
      <div className={cardsPagination}>
        <Cards countriesPerPage={countriesPerPage} />
        <SidePanel />
      </div>
      <Pagination
        handlePageChange={handlePageChange}
        totalPages={totalPages}
        currentPage={currentPage}
      />

    </div>
  );
}

export default Home;
