import React, { useEffect, useState } from 'react';
import HeroCard from '../../components/heroCard/HeroCard';
import "./Home.scss";
import doc from './doc.jpg'





const Home = (props) => {

    const [search, setSearch] = useState("");
    const [filteredHero, setFilteredHero] = useState([])
    const { heroes } = props;
     
 


    const setId = (id) => {
            if(!filteredHero.some((el)=>el.id===id)){
            const filteredheros = heroes.find((e)=>{
                return e.id === id
            })

            setFilteredHero([...filteredHero, filteredheros])}

    }

    console.log(filteredHero)


    const deleteBar = (id) => {

       
        const deleteHero = filteredHero.filter((e)=>{
            return e.id !== id
        })
        setFilteredHero(deleteHero)
    }
    

    
      var searchedH = heroes?.filter((e) => e.name.toLowerCase().includes(search.toLowerCase()))
    

    const searchInput = (s) => {
        setSearch(s);
        console.log(searchInput);
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


/* {{searchCan?}.map((e) => (
    <Card candidates={candidates} setId={setId} cad={candidates.id} />
  ))}
  const searchCan = (input) =>{
    const filtered = candidates.filter(candidate => {
      return candidate.name.toLowerCase().includes(input.toLowerCase())
    })
    setInput(input);
    setFilteredCand(filtered);
  
  } */

  const [search, setSearch] = useState("");
  const [filteredCand, setFilteredCand] = useState([]);


  const setId = (id) => {
    if(!filteredCand?.some((el) => el.id===id)){
      const filteredCands = candidates.find((e) =>{
        return e.id == id;
      })
      setFilteredCand([...filteredCand, filteredCands])}
  }
  console.log(filteredCand);


 

  var searchCan = candidates.filter((e) => e.name.toLowerCase().includes(search.toLowerCase()))

  const searchInput = (s) => {
    setSearch(s);
  }