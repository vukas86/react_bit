import React from 'react';
import { useEffect, useState } from 'react';
import "./App.scss";
import Home from "../pages/home/Home"
import Hero from "../pages/hero/Hero"

const apiKey = "9c6dade59f9d212b0bda7a54ef6e0a7e";

const App = (props) => {
    const[heroes, setHeroes] = useState([]);

    useEffect(() => {
     fetch    (`http://gateway.marvel.com/v1/public/characters?apikey=${apiKey}`)
    .then((res) => res.json())
    .then((data) =>{
        setHeroes(data.data.results);
    });
}, []);
    return (
        <div id="app">
            <Home heroes={heroes} />
            <Hero/>
        </div>
    );
};

export default App;