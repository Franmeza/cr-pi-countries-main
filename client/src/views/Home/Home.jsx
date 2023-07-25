import Cards from "../../components/CardsContainer/Cards";
import Pagination from "../../components/Pagination/Pagination";
import SidePanel from "../../components/SidePanel/SidePanel";
import { fetchCountriesInfo } from "../../redux/actions";
import { homeContainer, cardsPagination } from "./Home.module.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function Home() {

  const countries = useSelector((state) => state.countries);
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;  
  const totalPages =  Math.ceil(countries.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const countriesPerPage =  countries.slice(startIndex, endIndex)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountriesInfo());
  }, [dispatch])
  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


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
