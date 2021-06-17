import "./HeroCard.scss";

const HeroCard = (props) => {
  console.log(props);
  const { name, thumbnail } = props.hero;
  const { extension, path } = thumbnail;
  return (
    <div className="hero-card">
      {/* <h3>Hero Card</h3> */}
      <div>{name}</div>
      <div className="image-container">
        <img alt="heroimg" src={`${path}.${extension}`}></img>
      </div>
      <div className="buttons-container">
        <button>info</button>
        <button>add</button>
      </div>
    </div>
  );
};

export default HeroCard;
