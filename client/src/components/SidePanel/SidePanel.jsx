import PropTypes from "prop-types";
import { sidePanelContainer,/*  clearFilters */ } from "./SidePanel.module.css";
import { removeFilter } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
function SidePanel({
  filterByContinent,
  filterByActivity,
  orderByName,
  orderByPopulation,
}) {
  const activities = useSelector((state) => state.activities);
  // const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  let activitiesSet = new Set();

  activities.forEach((element) => {
    activitiesSet.add(element.name);
  });

  const handleContinentSelected = (e) => {      
    const optionSelected = e.target.value;
    if (optionSelected === "Continent") {
      dispatch(removeFilter());
    } else {
      filterByContinent(optionSelected);
    }
  };

  const handleActivitySelected = (e) => {
    const activitySelected = e.target.value;
    if (activitySelected === "activities") {
      dispatch(removeFilter());
    } else {
      filterByActivity(activitySelected);
    }
  };
  
    // const clearFilter = () => {     
    //   dispatch(removeFilter());
    // };

  const handleOrderName = (e) => {
    if (e.target.value === "selectOrder") {
      dispatch(removeFilter());
    } else {
      orderByName(e.target.value);
    }
  };
  const handleOrderPopulation = (e) => {
    if (e.target.value === "selectOrder") {
      dispatch(removeFilter());
    } else {
      orderByPopulation(e.target.value);
    }
  };

  return (
    <section className={sidePanelContainer}>
      <div>
      
      {/* {countries.length !== 250 ? (
          <div className={clearFilters}>Clear filters
          <button onClick={clearFilter}>x</button>
          </div>
        ) : null} */}
        <h4>Filter by:</h4>
        <label htmlFor="continents">Continents</label>
        <select name="orderByContinent"  onChange={handleContinentSelected}>
          <option value="Continent">All Continents</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Antarctica">Antarctica</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>

        <label htmlFor="activities">Activities</label>
        <select name="orderByActiviy" onChange={handleActivitySelected}>
          <option value="activities">All Activities</option>
          {Array.from(activitiesSet).map((activity, index) => (
            <option key={index} value={activity}>
              {activity.charAt(0).toUpperCase() +
                activity.split("").join("").slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h4>Order by:</h4>
        <label htmlFor="name">Name</label>
        <br />
        <select name="orderByName" onChange={handleOrderName}>
          <option value="selectOrder">Select order</option>
          <option value="A">A-Z</option>
          <option value="D">Z-A</option>
        </select>
        <br />

        <label htmlFor="population">Population</label>
        <br />
        <select name="orderBy" onChange={handleOrderPopulation}>
          <option value="selectOrder">Select order</option>
          <option value="A">Ascending</option>
          <option value="D">Descending</option>
        </select>
      </div>
    </section>
  );
}

SidePanel.propTypes = {
  filterByContinent: PropTypes.func.isRequired,
  filterByActivity: PropTypes.func.isRequired,
  orderByName: PropTypes.func.isRequired,
  orderByPopulation: PropTypes.func.isRequired,
};

export default SidePanel;
