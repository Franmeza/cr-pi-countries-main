import PropTypes from "prop-types";
import { useState } from "react";
import { sidePanelContainer } from "./SidePanel.module.css";
import { fetchCountriesInfo } from "../../redux/actions";
import { useDispatch } from "react-redux";
function SidePanel({ filterByContinent, orderByName }) {

  const dispatch = useDispatch(); 

  const selectChange = (e) => {
    const optionSelected = e.target.value;
    if (optionSelected === "Continent") {
      dispatch(fetchCountriesInfo());
    } else {
      filterByContinent(optionSelected);
    }
  };

  const handleOrderName= (e)=>{
   
    console.log(e);
    const order = e.target.value
    console.log(e.currentTarget.value);
    orderByName(order)
  }
  return (
    <section>
      <div className={sidePanelContainer}>
        <div>
          <h4>Filter by:</h4>
          <select name="orderByContinent" onChange={selectChange}>
            <option value="Continent">All Continents</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>

          <select name="orderByActiviy">
            <option value="Activities">Activities</option>
          </select>
        </div>

        <div>
          <h4>Order by Name</h4>
          <select name="orderByName" onChange={handleOrderName}>
            <option value="A">Ascending</option>
            <option value="D">Descending</option>
          </select>

          <h4>Order by Population</h4>
          <select name="orderBy">
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
  orderByName: PropTypes.func.isRequired,

};

export default SidePanel;
