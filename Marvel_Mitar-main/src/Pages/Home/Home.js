import HeroCard from "../../Components/HeroCard/HeroCard";
import "./Home.scss";

//kreiranje komponente / stranice

const Home = (props) => {
  const { heroes } = props;
  console.log(heroes);
  return (
    <div id="Home-page">
      <h3>Home Page</h3>
      <div className="header">Header</div>
      <div className="content">
        <div className="main">
          <div className="search-bar">
            <input type="search"></input>
            <button>go</button>
          </div>
          <div className="cards-container">
            {heroes.map((e) => (
              <HeroCard hero={e}></HeroCard>
            ))}
          </div>
        </div>
        <div className="side">desno</div>
      </div>
    </div>
  );
};

export default Home;
