import PropTypes from "prop-types";
import { sidePanelContainer } from "./SidePanel.module.css";
import { fetchCountriesInfo } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
function SidePanel({
  filterByContinent,
  filterByActivity,
  orderByName,
  orderByPopulation,
}) {
  const activities = useSelector((state) => state.activities);
  const dispatch = useDispatch();

  let activitiesSet = new Set();

  activities.forEach((element) => {
    activitiesSet.add(element.name);
  });

  const handleContinentSelected = (e) => {
    const optionSelected = e.target.value;
    if (optionSelected === "Continent") {
      dispatch(fetchCountriesInfo());
    } else {
      filterByContinent(optionSelected);
    }
  };

  const handleActivitySelected = (e) => {
    const activitySelected = e.target.value;
    if (activitySelected === "activities") {
      dispatch(fetchCountriesInfo());
    } else {
      filterByActivity(activitySelected);
    }
  };

  const handleOrderName = (e) => {
    orderByName(e.target.value);
  };
  const handleOrderPopulation = (e) => {
    orderByPopulation(e.target.value);
  };

  return (
    <section>
      <div className={sidePanelContainer}>
        <div>
          <h4>Filter by:</h4>
          <label htmlFor="continents">Continents</label>
          <select name="orderByContinent" onChange={handleContinentSelected}>
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
                {activity}
              </option>
            ))}
          </select>
        </div>

        <div>
          <h4>Order by Name</h4>
          <select name="orderByName" onChange={handleOrderName}>
            <option value="">Select order</option>
            <option value="A">Ascending</option>
            <option value="D">Descending</option>
          </select>

          <h4>Order by Population</h4>
          <select name="orderBy" onChange={handleOrderPopulation}>
            <option value="A">Ascending</option>
            <option value="D">Descending</option>
          </select>
        </div>
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
