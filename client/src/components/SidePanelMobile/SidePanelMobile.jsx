import { sidePanelMobile } from "./SidePanelMobile.module.css";

function SidePanelMobile() {
  return (
    <section>
      <div className={sidePanelMobile}>
        <div>
          <h4>Filter by:</h4>
          <select name="orderByContinent">
            <option value="Continent">All Continents</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
          
            <h4>by Activities</h4>
            <select name="orderByActiviy">
              <option value="Activities">Activities</option>
            </select>
          
        </div>

        <div>
          <h4>Order by Name</h4>
          <select name="orderByName">
            <option value="Ascending">Ascending</option>
            <option value="Descending">Descending</option>
          </select>

          <h4>Order by Population</h4>
          <select name="orderBy" id="">
            <option value="Ascending">Ascending</option>
            <option value="Descending">Descending</option>
          </select>
        </div>
      </div>
    </section>
  );
}

export default SidePanelMobile;
