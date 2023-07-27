import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { filterCountries, fetchCountriesInfo } from "../../redux/actions";
import { useDispatch } from "react-redux";
import {navBar, link} from "./NavBar.module.css"


function NavBar() {
  const dispatch = useDispatch()
  const onSearch= (name) =>{
    
    name.lenght !== 0 ?
   dispatch(filterCountries(name))
   : dispatch(fetchCountriesInfo())
  } 



  return (
    <nav className={navBar}>
         
      <ul>
        <li><Link className={link} to="/home">HOME</Link></li>
        <li><Link className={link} to="/activities">ACTIVITIES</Link></li>        
        <li><Link className={link} to="/create"></Link>CREATE ACTIVITIES</li>        
      </ul>
      
      <SearchBar onSearch={onSearch}/>     
    </nav>
  );
}

export default NavBar;
