import Cards from "../../components/CardsContainer/Cards";
import Pagination from "../../components/Pagination/Pagination";
import SidePanel from "../../components/SidePanel/SidePanel";
import { fetchCountriesInfo, filterByContinent, orderByName } from "../../redux/actions";
import { homeContainer, cardsPagination } from "./Home.module.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SidePanelMobile from "../../components/SidePanelMobile/SidePanelMobile";

function Home() {

  const countries = useSelector((state) => state.countries);
  
  const [showPanel, setShowPanel] = useState(false)
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

  const toggleFilterOptions = () =>{    
    setShowPanel(!showPanel)
  }

  const filterCountriesByContinent = (continent) =>{    
    dispatch(filterByContinent(continent))
  }

  const orderCountriesByName =(order)=>{
    dispatch(orderByName(order))
  }
  
    return (
    <div className={homeContainer}>
      <span onClick={toggleFilterOptions}>Filter</span>
      <div className={cardsPagination}>
        <Cards countriesPerPage={countriesPerPage} />
       { showPanel ? <SidePanelMobile/> : null}
        <SidePanel filterByContinent = {filterCountriesByContinent}
        orderByName = {orderCountriesByName}/>
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
