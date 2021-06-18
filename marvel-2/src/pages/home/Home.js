import React from 'react';
import HeroCard from '../../components/heroCard/HeroCard';
import "./Home.scss";


const Home = (props) => {
    const{heroes} = props;
    console.log(heroes);


    return (
        <div id="Home-page">
            <div className="header">
                Hero Team
            </div>
            <div className="content">
            <div className="main">
                <div className="search-bar">
                    <input type="search" placeholder="Search"></input>
                    <button>go</button>
                </div>
                <div className="cards-container">
                    {heroes.map((e) =>(
                        <HeroCard hero = {e}></HeroCard>
                    ))}

                </div>
            </div>
            <div className="side">desno</div>
            </div>


            

        </div>

    )


}

export default Home
