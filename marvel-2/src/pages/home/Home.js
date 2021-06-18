import React from 'react';
import HeroCard from '../../components/heroCard/HeroCard';
import "./Home.scss";
import doc from './doc.jpg'





const Home = (props) => {
    const { heroes } = props;
    console.log(heroes);
    return (
        <div id="Home-page">

            <div className="header">
                <p> Hero Team</p>
            </div>
            <div className="content">
                <div className="main">
                    <div className="search-bar">
                        <input type="search"></input>
                        <button>go</button>

                    </div>
                    <div className="cards-container">
                        {heroes?.map((e) => (
                            <HeroCard hero={e}></HeroCard>
                        ))}
                    </div>
                </div>
                <div className="side">
                    <p>My Team</p>
                    <div className="sideHero">
                        <img src={doc} alt="doc" />
                        <h3>Hero</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home
