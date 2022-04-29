import { useContext } from "react";

import FavoritesContext from "../../../store/favorites-context";
import "./MeetupItem.scss";

const MeetupItem = (props) => {
  const { id, image, title, description, address } = props.meetupData;
  const favoritesContext = useContext(FavoritesContext);
  const itemIsFavorite = favoritesContext.itemIsFavorite(id);

  const toggleFavorites = () => {
    itemIsFavorite
      ? favoritesContext.removeFavorite(id)
      : favoritesContext.addFavorite({
          id,
          title,
          description,
          image,
          address,
        });
    console.log("called!!!", itemIsFavorite, id);
  };

  const { meetupData } = props;
  return (
    <div className="tile">
      <div className="image-container">
        <img src={meetupData.image} alt={meetupData.title} />
      </div>
      <div className="text-container">
        <h3>{meetupData.title}</h3>
        <address>{meetupData.address}</address>
        <p>{meetupData.description}</p>
      </div>
      <div className="button-container">
        <button onClick={toggleFavorites}>
          {itemIsFavorite ? "Remove From Favorites" : "To Favorites"}
        </button>
      </div>
    </div>
  );
};

export default MeetupItem;
