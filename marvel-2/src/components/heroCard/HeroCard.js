import "./HeroCard.scss";


const HeroCard = (props) => {
  console.log(props);
  const { name, thumbnail } = props.hero;
  const { extension, path } = thumbnail;






  return (


    <div className="hero-card">

      <p>{name}</p>
      <div className="image-container">
        <img alt="heroimg" src={`${path}.${extension}`}></img>
      </div>
      <div className="buttons-container">
        <button className="info_btn">Add</button>
        <button className="add_btn">Info</button>
      </div>
    </div>


  );
};

export default HeroCard;