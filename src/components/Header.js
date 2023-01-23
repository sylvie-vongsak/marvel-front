import logo from "../img/1.png";
import { Link, useLocation } from "react-router-dom";

const Header = ({ setSearch }) => {
  const location = useLocation();
  const isDisplayed =
    location.pathname === "/" || location.pathname === "/comics";
  return (
    <header>
      <Link className="link-home" to="/">
        <div className="Logo">
          <img className="marvel-logo" src={logo} alt="logo marvel" />
        </div>
      </Link>
      <div className="header-link">
        <Link className="link-home" to="/">
          Characters
        </Link>
        <Link className="link-comics" to="/comics">
          Comics
        </Link>
        <Link className="link-favorites" to="/favorites">
          Favorites
        </Link>
        {isDisplayed && (
          <input
            className="search-bar"
            type="search"
            placeholder=" 🔍 What are you looking for ?  "
            name="Marvel"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
