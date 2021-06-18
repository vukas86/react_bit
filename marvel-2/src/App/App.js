import React from 'react';
import { useEffect, useState } from 'react';
import "./App.scss";
import Home from "../pages/home/Home"
<<<<<<< HEAD
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
=======

const App = (props) => {





    return (
        <div id="app">
            <h3>Ovo je stranica </h3>
            <Home />
>>>>>>> fe1f80b1a21148fbeafcfb388824405eaab164f3
        </div>
    );
};

export default App;