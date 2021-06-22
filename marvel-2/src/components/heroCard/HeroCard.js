import "./HeroCard.scss";
import { Link } from "react-router-dom";


const HeroCard = (props) => {
  const { name, thumbnail, id } = props.hero;
  const { extension, path } = thumbnail;
 const setId= props.setId
  






  return (


    <div className="hero-card">

      <p>{name}</p>
      <div className="image-container">
        <Link to="/Hero.js"><img alt="heroimg" src={`${path}.${extension}`}></img></Link>
      </div>
      <div className="buttons-container">
        <button className="info_btn" onClick = {()=>setId(id)}>Add</button>
        <button className="add_btn">Info</button>
      </div>
    </div>


  );
};

export default HeroCard;


