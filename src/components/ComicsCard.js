const ComicsCard = ({ comics }) => {
  return (
    <div key={comics.title} className="comics">
      <img
        src={comics.thumbnail.path + "." + comics.thumbnail.extension}
        alt="comics"
        className="comics-img"
      />

      <p className="comics-title">{comics.title}</p>
      {/* {comics.description && <p>{comics.description}</p>} */}
    </div>
  );
};

export default ComicsCard;
