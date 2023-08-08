import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { filterCountries, fetchCountriesInfo } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { navBar, link, searchBar} from "./NavBar.module.css";
import { useLocation } from "react-router-dom";
import logo from "../../assets/navbar_logo.png"

function NavBar() {
  const dispatch = useDispatch();
  const location = useLocation();

  const onSearch = (name) => {
    name.lenght !== 0
      ? 
      dispatch(filterCountries(name))
      : dispatch(fetchCountriesInfo());
  };
 
  return (
    <nav className={navBar}>
        <div>
          <img width="150rem" height="150rem" src={logo} alt="" />
        </div>
      <div>
        <ul>
          <li>
            <NavLink
              to="/home"
              className={link}
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "#FFC759" : "" };
              }}
            >
              <i className="fa fa-fw fa-home"></i> HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/activities"
              className={link}
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "#FFC759" : "" };
              }}
            >
              <i className="fa-solid fa-person-running"></i> ACTIVITIES
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/create"
              className={link}
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "#FFC759" : "" };
              }}
            >
              <i className="fa-solid fa-plus"></i> CREATE ACTIVITIES
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={searchBar}>
        {location.pathname === "/activities" ||
        location.pathname === "/create" ? null : (
          <SearchBar onSearch={onSearch} />
        )}
      </div>
    </nav>
  );
}

export default NavBar;
