import Cards from "../../components/CardsContainer/Cards";
import Pagination from "../../components/Pagination/Pagination";
import SidePanel from "../../components/SidePanel/SidePanel";
import {
  filterByContinent,
  filterByActivity,
  orderByName,
  orderByPopulation,
  fetchCountriesInfo 
} from "../../redux/actions";
import { homeContainer, cardsPagination, pagination } from "./Home.module.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SidePanelMobile from "../../components/SidePanelMobile/SidePanelMobile";

function Home() {
  const countries = useSelector((state) => state.countries);
  // const activities = useSelector((state)=> state.activities)
  const [displayPanel, setDisplayPanel] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [aux, setAux] = useState(false);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(countries.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const countriesPerPage = countries.slice(startIndex, endIndex);
  const dispatch = useDispatch();

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const toggleFilterOptions = () => {
    setDisplayPanel(!displayPanel);
  };

  const clearFilter =()=>{
    dispatch(fetchCountriesInfo())
  }

  const filterCountriesByContinent = (continent) => {
    dispatch(filterByContinent(continent));
  };

  const filterCountriesByActivity = (activity) => {
    dispatch(filterByActivity(activity));
  };

  const orderCountriesByName = (order) => {
    setAux(!aux);
    dispatch(orderByName(order));
  };

  const orderCountriesByPopulation = (order) => {
    setAux(!aux);
    dispatch(orderByPopulation(order));
  };

  return (
    <div className={homeContainer}>
      
      <span onClick={toggleFilterOptions}>Filter</span>
      {countries.length !==250 ?<span onClick={clearFilter}>Clear filter</span>:null}
      <div className={cardsPagination}>
        <Cards countriesPerPage={countriesPerPage} />
        {displayPanel ? (
          <SidePanelMobile
            filterByContinent={filterCountriesByContinent}
            filterByActivity={filterCountriesByActivity}
            orderByName={orderCountriesByName}
            orderByPopulation={orderCountriesByPopulation}
            displayPanel={displayPanel}
            setDisplayPanel={setDisplayPanel}
          />
        ) : null}
        <SidePanel
          filterByContinent={filterCountriesByContinent}
          filterByActivity={filterCountriesByActivity}
          orderByName={orderCountriesByName}
          orderByPopulation={orderCountriesByPopulation}
        />
      </div>
      <div className={pagination}>
        <Pagination
          handlePageChange={handlePageChange}
          totalPages={totalPages}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default Home;
