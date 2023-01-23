import React from "react";
import Cookies from "js-cookie";

const Favorites = () => {
  const favCharacters =
    (Cookies.get("favCharacters") &&
      JSON.parse(Cookies.get("favCharacters"))) ||
    [];

  const favComics =
    (Cookies.get("favComics") && JSON.parse(Cookies.get("favComics"))) || [];

  return (
    <div className="fav-characters-container">
      <div className="charact-text">
        <div className="fav">
          <p className="text-fav">My Favorite Characters</p>
        </div>
        <div className="fav-contain">
          {favCharacters.length > 0 ? (
            favCharacters.map((character, index) => {
              return (
                <div className="text-fav-character" key={index}>
                  <img
                    className="img-fav-character"
                    src={character.image}
                    alt={character.name}
                  />

                  <p className="description-fav">{character.name}</p>
                </div>
              );
            })
          ) : (
            <p className="resultat-fav">There are no favorites yet.</p>
          )}
        </div>
      </div>
      <div className="fav-comics-container">
        <div className="fav">
          <p className="text-fav">My Favorite Comics</p>
        </div>
        <div className="fav-contain">
          {favComics.length > 0 ? (
            favComics.map((comics, index) => {
              return (
                <div className="fav-comics" key={index}>
                  <img
                    className="img-fav-comics"
                    src={comics.image}
                    alt={comics.name}
                  />
                  <p className="description-fav">{comics.name}</p>
                </div>
              );
            })
          ) : (
            <p className="resultat-fav">There are no favorites yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
