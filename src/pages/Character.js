import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";

const Character = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel-back--pp6f8wcmdd76.code.run/character?id=${id}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="Character-container">
      <div className="Character-info">
        <img
          src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
          alt={data.name}
          className="Characters-img"
        />
        <div className="Characters-text">
          <p className="Characters-name">{data.name}</p>
          <p className="Characters-description">{data.description}</p>
        </div>
      </div>
      <div className="Characters-comics">
        {data.comics.map((item, index) => {
          return (
            <div className="Characters-comics-infos">
              <img
                src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                alt=""
                className="Characters-comics-img"
              />
              <p className="Characters-comics-title">{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Character;
