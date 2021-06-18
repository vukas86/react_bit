import "./HeroCard.scss";
import doc from './doc.jpg'

const HeroCard = (props) => {
    console.log(props);
    const{name, thumbnail} = props.hero;
    const {extension, path} = thumbnail;






    return (

        
        <div className="hero-card">

        <p>{name}</p>
        <div className="image-container">
          <img alt="heroimg" src={`${path}.${extension}`}></img>
        </div>
        <div className="buttons-container">
          <button className="info_btn">info</button>
          <button className="add_btn">add</button>
        </div>
        </div>
      
      
    );
};

export default HeroCard;