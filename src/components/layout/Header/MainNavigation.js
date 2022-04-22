import { Link } from "react-router-dom";
import { useContext } from "react";

import FavoritesContext from "../../../store/favorites-context";
import "./MainNavigation.scss";

const MainNavigation = () => {
  const favoritesContext = useContext(FavoritesContext);
  return (
    <header>
      <p className="title">React Meetups</p>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetup</Link>
          </li>
          <li style={{ position: "relative" }}>
            <Link to="/favorites">
              My Favorites
              <div className="badge">{favoritesContext.totalFavorites}</div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
