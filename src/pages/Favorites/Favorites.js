import { useContext } from "react";
import { Link } from "react-router-dom";

import MeetupList from "../../components/reusables/MeetupList/MeetupList";
import FavoritesContext from "../../store/favorites-context";
import classes from "../AllMeetups/AllMeetups.module.scss";

const Favorites = () => {
  const favoritesContext = useContext(FavoritesContext);
  let content =
    favoritesContext.totalFavorites === 0 ? (
      <p className="noContentText">
        No Favorites yet, go to{" "}
        <Link to="/">
          <span
            style={{
              color: "var(--primary-color)",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            All Meetups
          </span>
        </Link>{" "}
        to add new favorites
      </p>
    ) : (
      <MeetupList meetups={favoritesContext.favorites} />
    );
  return (
    <div className={classes.meetupListContainer}>
      <h1 className="mainTitle">Favorites Meetups</h1>
      {content}
    </div>
  );
};

export default Favorites;
