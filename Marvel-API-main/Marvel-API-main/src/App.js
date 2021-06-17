import './App.scss'
import Header from './components/header/Index'
import React, {useEffect, useState} from 'react'
import CharacterTable from './components/character/CharacterTable'
/* import {getData} from './Api' */



//d2872ab4763160bb556fb5a68f34d85a
/* export const getData = () => {
    return fetch(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=9c6dade59f9d212b0bda7a54ef6e0a7e&hash=${hash}`)
    .then(results => results.json)


}

 */

/* const hash = "d2872ab4763160bb556fb5a68f34d85a"; */



const Main = () => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const getData = () => {
            return fetch('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=9c6dade59f9d212b0bda7a54ef6e0a7e&hash=a0e8046e4fb25c73c5706e9d51c2eb6d')
            .then(results => results.json)
            .then(data => setData(data))
           
          
        }
        console.log(getData.data.data.results)
        setData(getData.data.data.results)

       
        setLoading(false);
       
        
    }, []);
    	

    return(
        <div className="container"> 
        <Header/>
        <CharacterTable data={data} isLoading={isLoading} />
            </div>
    )
}



export default App