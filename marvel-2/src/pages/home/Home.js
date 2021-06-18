import React from 'react';
<<<<<<< HEAD
import HeroCard from '../../components/heroCard/HeroCard';
import "./Home.scss";


const Home = (props) => {
    const{heroes} = props;
    console.log(heroes);
=======
import "./Home.scss";

const Home = () => {
>>>>>>> fe1f80b1a21148fbeafcfb388824405eaab164f3


    return (
        <div id="Home-page">
            <div className="header">
<<<<<<< HEAD
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


            
=======
                Header
            </div>
            <div className="content">

            </div>
>>>>>>> fe1f80b1a21148fbeafcfb388824405eaab164f3

        </div>

    )


}

export default Home
