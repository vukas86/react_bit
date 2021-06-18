import React from 'react';
import { useEffect, useState } from 'react';
import "./App.scss";
import Home from "../pages/home/Home"
import { Switch, Route } from 'react-router-dom';
import Hero from "../pages/hero/Hero"

const apiKey = "9c6dade59f9d212b0bda7a54ef6e0a7e";



const App = (props) => {
    const [heroes, setHeroes] = useState([]);

    useEffect(() => {
        fetch(`http://gateway.marvel.com/v1/public/characters?apikey=${apiKey}`)
            .then((res) => res.json())
            .then((data) => {
                setHeroes(data.data.results);
            });
    }, []);

    // string
    // broj
    // null
    // undefined
    // <JSX tag></JSX tag>
    return (
        <div id="app">
            <Home heroes={heroes}></Home>
            <Hero></Hero>

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/home/:id" component={Hero} />
            </Switch>
        </div>
    );
};

export default App;