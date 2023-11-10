import { useState } from "react";
import PropTypes from "prop-types";
import {searchBar,} from "./SearchBar.module.css"
function SearchBar({ onSearchCountry }) {
  const [name, setName] = useState(""); 

  function handleChange(event) {
    const name = event.target.value;
    setName(name);   
    onSearchCountry(name);
  }

  return (
    <div className={searchBar}>
      <input        
        type="text"
        value={name}
        placeholder="search by name"
        onChange={handleChange}
      
      />
      <span><i className="fa-solid fa-magnifying-glass"> </i></span>
    </div>
  );
}

SearchBar.propTypes = {
  onSearchCountry: PropTypes.func,
};

export default SearchBar;
