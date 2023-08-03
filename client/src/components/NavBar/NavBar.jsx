import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { filterCountries, fetchCountriesInfo } from "../../redux/actions";
import { useDispatch} from "react-redux";
import { navBar, link, menuOptions} from "./NavBar.module.css";

function NavBar() {
  const dispatch = useDispatch();
  const onSearch = (name) => {
    name.lenght !== 0
      ? dispatch(filterCountries(name))
      : dispatch(fetchCountriesInfo());
  };

  return (
    <nav className={navBar}>
      <div className={menuOptions}>
      <ul>
        <Link className={link} to="/home">
          <li><i className="fa fa-fw fa-home"></i> HOME</li>
        </Link>
        <Link className={link} to="/activities">
          <li><i className="fa-solid fa-person-running"></i> ACTIVITIES</li>
        </Link>
        <Link className={link} to="/create">
          <li><i className="fa-solid fa-plus"></i> CREATE ACTIVITIES</li>
        </Link>
      </ul>
      </div>
      <div >
        <SearchBar onSearch={onSearch} />
      </div>
    </nav>
  );
}

export default NavBar;
