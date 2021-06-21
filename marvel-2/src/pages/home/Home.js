import React from 'react';
import HeroCard from '../../components/heroCard/HeroCard';
import "./Home.scss";
import doc from './doc.jpg'

import { useEffect, useState } from 'react';





const Home = (props) => {
    const [favorites, setFavorites] = useState([]);
    const [search, setSearch] = useState("");
    const { heroes } = props;
   


    const setId = (p) => {
        favorites.includes(p) ? setFavorites([...favorites]) : setFavorites([...favorites, p]);
    }

    const filteredHero = heroes?.filter((e) => favorites.includes(e.id));
/* 
    const deleteBar = filteredHero [0] ? filteredHero.splice((e) => filteredHero.indexof(deleteBar),1): */

    const deleteBar = (id) => {
        id === favorites[0] ? favorites.filter((e) => e.id !== id) : console.log("ok");
       
    }
    

    
      var searchedH = heroes?.filter((e) => e.name.toLowerCase().includes(search.toLowerCase()))
    

    const searchInput = (s) => {
        setSearch(s);
    }

    return (
        <div id="Home-page">

            <div className="header">
                <p> Hero Team</p>
            </div>
            <div className="content">
                <div className="main">
                    <div className="search-bar">
                        <input type="search" onChange={(e) => searchInput(e.currentTarget.value)}></input>
                        <button>go</button>
                    </div>
                    <div className="cards-container">
                        {searchedH?.map((e) => (
                            <HeroCard setId={setId} hero={e}></HeroCard>
                        ))}
                    </div>
                </div>
                <div className="side">
                    <p>My Team</p>
                
                        {filteredHero?.map (e => {
                            return( <div className="sideHero">
                            <img src={`${e.thumbnail.path}.${e.thumbnail.extension}`}className="first-pic" alt="napred"></img>
                            <img  src="https://www.netclipart.com/pp/m/120-1205364_rubbish-bins-waste-paper-baskets-recycling-bin-zero.png" className="second-pic" alt="nazad" onClick = {()=>deleteBar(e.id)} ></img>
                            <span>{e.name}</span>
                            </div>)
                            
                        
                    }
                            )}
                 
                </div>
            </div>
        </div>
    );
};

export default Home
