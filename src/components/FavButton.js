import { useState } from "react";
import Cookies from "js-cookie";
import { useLocation } from "react-router-dom";

const FavButton = ({ id, name, image, favList, setFavList }) => {
  const [isFavorite, setIsFavorite] = useState(
    favList.some((element) => element.id === id)
  );

  const location = useLocation();
  const favType = location.pathname === "/" ? "favCharacters" : "favComics";
  const newObject = { id: id, name: name, image: image };

  function handleFav() {
    setIsFavorite(!isFavorite);
    let newList = [...favList];

    if (isFavorite) {
      const index = newList.findIndex((element) => element.id === id);
      newList.splice(index, 1);
      setFavList(newList);
      Cookies.set(favType, JSON.stringify(newList));
    } else {
      newList.push(newObject);
      setFavList(newList);
      Cookies.set(favType, JSON.stringify(newList));
    }
  }

  return (
    <button className="ButtonFav" onClick={() => handleFav()} type="button">
      <p style={{ paddingRight: "2px" }}>{isFavorite ? "❤️" : "➕"}</p>
    </button>
  );
};

export default FavButton;
