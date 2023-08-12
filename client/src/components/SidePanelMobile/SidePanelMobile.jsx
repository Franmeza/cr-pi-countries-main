import { sidePanelMobile } from "./SidePanelMobile.module.css";
import PropTypes from "prop-types";
import { fetchCountriesInfo } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
function SidePanelMobile({
  filterByContinent,
  filterByActivity,
  orderByName,
  orderByPopulation,
  setDisplayPanel,  
}) {
  const activities = useSelector((state) => state.activities);
  const dispatch = useDispatch();

  let activitiesSet = new Set();

  activities.forEach((element) => {
    activitiesSet.add(element.name);
  });

  const handleContinentSelected = (e) => {
    const optionSelected = e.target.value;
    if (optionSelected === "allContinents") {
      dispatch(fetchCountriesInfo());
    } else {
      filterByContinent(optionSelected);
    }
    setDisplayPanel(false);
  };

  const handleActivitySelected = (e) => {
    const activitySelected = e.target.value;
    if (activitySelected === "allActivities") {
      dispatch(fetchCountriesInfo());
    } else {
      filterByActivity(activitySelected);
    }
    setDisplayPanel(false);
  };

  const handleOrderName = (e) => {
    if(e.target.value === 'selectOrder'){
      dispatch(fetchCountriesInfo());
    }else{
      orderByName(e.target.value);
    }
    setDisplayPanel(false);
  };
  const handleOrderPopulation = (e) => {
    if(e.target.value === 'selectOrder'){
      dispatch(fetchCountriesInfo());
    }else{
      orderByPopulation(e.target.value);
    }
    setDisplayPanel(false);
  };
  return (
    <section>
      <div className={sidePanelMobile}>
        <div>
          <h4>Filter by:</h4>
          <label htmlFor="continents">Continents</label>
          <br />
          <select name="orderByContinent" onChange={handleContinentSelected}>
            <option value="allContinents">All Continents</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
          <br />

          <label htmlFor="activities">Activities</label>
          <br />
          <select name="orderByActiviy" onChange={handleActivitySelected}>
            <option value="allActivities">All Activities</option>
            {Array.from(activitiesSet).map((activity, index) => (
              <option key={index} value={activity}>
                {activity}
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
          </select><br />
          
          <label htmlFor="population">Population</label>
          <br />
          <select name="orderBy" onChange={handleOrderPopulation}>
            <option value="selectOrder">Select order</option>
            <option value="A">Ascending</option>
            <option value="D">Descending</option>
          </select>
        </div>
      </div>
    </section>
  );
}
SidePanelMobile.propTypes = {
  filterByContinent: PropTypes.func.isRequired,
  filterByActivity: PropTypes.func.isRequired,
  orderByName: PropTypes.func.isRequired,
  orderByPopulation: PropTypes.func.isRequired,
  setDisplayPanel: PropTypes.func.isRequired,
};
export default SidePanelMobile;
