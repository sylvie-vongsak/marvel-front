const Card = ({ character }) => {
  function truncate(value) {
    if (value.length >= 160) {
      return value.slice(0, 160) + "...";
    }
  }
  return (
    <div className="card">
      <div className="card-character">
        <img
          className="card-character-img"
          src={character.thumbnail.path + "." + character.thumbnail.extension}
          alt="personnage"
        />
        <div className="card-character-name-container">
          <p>{character.name}</p>
        </div>
      </div>
      <p className="card-character-description">
        {truncate(character.description)}
      </p>
    </div>
  );
};

export default Card;
