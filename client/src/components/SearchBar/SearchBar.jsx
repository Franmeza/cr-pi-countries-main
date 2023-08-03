import { useState } from "react";
import PropTypes from "prop-types";
import {searchBar} from "./SearchBar.module.css"
function SearchBar({ onSearch }) {
  const [name, setName] = useState(""); 

  function handleChange(event) {
    const name = event.target.value;
    setName(name);   
    onSearch(name);
  }

  return (
    <div className={searchBar}>
      <input
        type="text"
        value={name}
        placeholder="search by name"
        onChange={handleChange}
      />
    
    </div>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func,
};

export default SearchBar;
