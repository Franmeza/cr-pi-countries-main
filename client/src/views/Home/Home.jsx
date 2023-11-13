import Cards from "../../components/CardsContainer/Cards";
import Pagination from "../../components/Pagination/Pagination";
import SidePanel from "../../components/SidePanel/SidePanel";
import {
  filterByContinent,
  filterByActivity,
  orderByName,
  orderByPopulation,
  fetchCountriesInfo,
  getActivities,
  removeFilter,
} from "../../redux/actions";
import { homeContainer, cardsPagination, pagination } from "./Home.module.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SidePanelMobile from "../../components/SidePanelMobile/SidePanelMobile";
import Loader from "../../components/Loader/Loader";
import Swal from "sweetalert2";

function Home() {
  const countries = useSelector((state) => state.countries);
  const activities = useSelector((state) => state.activities);
  const [displayPanel, setDisplayPanel] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [aux, setAux] = useState(false);
  // const [loader, setLoader] = useState(false);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(countries.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const countriesPerPage = countries.slice(startIndex, endIndex);
  const dispatch = useDispatch();

  useEffect(() => {
    // setLoader(true);

    const begin = async () => {
      try {
        if (countries.length === 0 || activities.length === 0) {
          Swal.fire({
            title: "Please Wait...",
            html: "Give it some time to load as this app is hosted in a free hosting service. If it takes too much time, please reload the page. Thanks!",
            allowOutsideClick: false,
            didOpen: () => {
              Swal.showLoading();
            },
          });
        }
        countries.length === 0 && (await dispatch(fetchCountriesInfo()));

        activities.length === 0 && (await dispatch(getActivities()));
      } catch (error) {
        throw Error(error);
      } finally {
        Swal.close();
      }

      // setLoader(false);

      // setTimeout(() => {
      // }, 1500);
    };

    begin();
  }, [dispatch, activities.length]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const toggleFilterOptions = () => {
    setDisplayPanel(!displayPanel);
  };

  const clearFilter = () => {
    dispatch(removeFilter());
  };

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
    <>
      {/* {loader && <Loader />} */}
      <div className={homeContainer}>
        <span onClick={toggleFilterOptions}>Filter</span>
        {countries.length !== 250 ? (
          <span onClick={clearFilter}>Clear filter</span>
        ) : null}

        <div>
          {countries.length === 0 && (
            <p>No countries to display, please try with another name</p>
          )}
        </div>

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
      </div>
      <div className={pagination}>
        <Pagination
          handlePageChange={handlePageChange}
          totalPages={totalPages}
          currentPage={currentPage}
        />
      </div>
    </>
  );
}

export default Home;
