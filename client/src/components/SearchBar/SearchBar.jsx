import { useState } from "react";
import PropTypes from "prop-types";

function SearchBar({ onSearch }) {
  const [name, setName] = useState("");
console.log(name);
  function handleChange(event) {
    event.persist();
    const newValue = event.target.value
    setName(newValue);
    console.log(name);
   
    onSearch(name)
  }
  return (
    <div>
      <input type="text" value={name} placeholder="search by name" onChange={handleChange} />
      
    </div>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func,
};

export default SearchBar;
