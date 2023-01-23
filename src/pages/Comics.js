import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import ComicsCard from "../components/ComicsCard";
import FavButton from "../components/FavButton";
import Cookies from "js-cookie";

const Comics = ({ search }) => {
  const list =
    (Cookies.get("favComics") && JSON.parse(Cookies.get("favComics"))) || [];

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [favComics, setFavComics] = useState(list);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const myUrlWithParams = new URL(
          "https://site--marvel-back--pp6f8wcmdd76.code.run/comics"
        );
        search && myUrlWithParams.searchParams.append("title", search);
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
      {data.results.map((comics) => {
        return (
          <div key={comics._id} style={{ position: "relative" }}>
            <ComicsCard comics={comics} />
            <FavButton
              id={comics._id}
              name={comics.title}
              image={comics.thumbnail.path + "." + comics.thumbnail.extension}
              favList={favComics}
              setFavList={setFavComics}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Comics;
