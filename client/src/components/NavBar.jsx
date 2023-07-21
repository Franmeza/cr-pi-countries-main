import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <p>
        <Link to="/home">HOME</Link>
      </p>
      <p>
        <Link to="/create">FORM</Link>
      </p>
    </div>
  );
}

export default NavBar;
