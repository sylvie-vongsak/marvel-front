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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#F0E7CB",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "5px solid black",
            backgroundColor: "#ED1D24",
            width: "250px",
            height: "50px",
            textAlign: "center",
            marginTop: "80px",
            marginBottom: "40px",
          }}
        >
          <p
            style={{
              color: "white",
              fontFamily: "Marvel",
              fontWeight: "bold",
              fontSize: "24px",
            }}
          >
            My Favorite Characters
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
          {favCharacters.length > 0 ? (
            favCharacters.map((character, index) => {
              return (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={character.image}
                    alt={character.name}
                    style={{
                      width: "200px",
                      borderRadius: "50%",
                      boxShadow: "5px 5px 5px -5px #000000",
                    }}
                  />
                  <p style={{ fontFamily: "Marvel", fontWeight: "bold" }}>
                    {character.name}
                  </p>
                </div>
              );
            })
          ) : (
            <p style={{ fontFamily: "Marvel" }}>
              There are no favorites yet 🥲
            </p>
          )}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: "300px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "5px solid black",
            backgroundColor: "#ED1D24",
            width: "250px",
            height: "50px",
            textAlign: "center",
            marginTop: "80px",
            marginBottom: "40px",
          }}
        >
          <p
            style={{
              color: "white",
              fontFamily: "Marvel",
              fontWeight: "bold",
              fontSize: "24px",
            }}
          >
            My Favorite Comics
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
          {favComics.length > 0 ? (
            favComics.map((comics, index) => {
              return (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={comics.image}
                    alt={comics.name}
                    style={{
                      width: "200px",
                      borderRadius: "2%",
                      boxShadow: "5px 5px 5px -5px #000000",
                    }}
                  />
                  <p
                    style={{
                      fontFamily: "Marvel",
                      fontWeight: "bold",
                      width: "180px",
                      textAlign: "center",
                    }}
                  >
                    {comics.name}
                  </p>
                </div>
              );
            })
          ) : (
            <p style={{ fontFamily: "Marvel" }}>
              There are no favorites yet 🥲
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
