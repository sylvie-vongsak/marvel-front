import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Card from "../components/Card";
import FavButton from "../components/FavButton";
import Cookies from "js-cookie";

const Home = ({ search }) => {
  const list =
    (Cookies.get("favCharacters") &&
      JSON.parse(Cookies.get("favCharacters"))) ||
    [];

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [favCharacters, setFavCharacters] = useState(list);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const myUrlWithParams = new URL(
          "https://site--marvel-back--pp6f8wcmdd76.code.run/Home"
        );
        search && myUrlWithParams.searchParams.append("name", search);
        const response = await axios.get(myUrlWithParams.href);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [search]);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="Characters-container">
      {data.results.map((character) => {
        return (
          <div key={character._id} style={{ position: "relative" }}>
            <Link to={`/character/${character._id}`}>
              <Card character={character} />
            </Link>
            <FavButton
              id={character._id}
              name={character.name}
              image={
                character.thumbnail.path + "." + character.thumbnail.extension
              }
              favList={favCharacters}
              setFavList={setFavCharacters}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
