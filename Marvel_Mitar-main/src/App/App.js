import "./App.scss";

import Home from "../Pages/Home/Home";
import Hero from "../Pages/Hero/Hero";
import { useEffect, useState } from "react";

const apiKey = "c8ecb1f17c3f33b02c878e646a51d28a";

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
      <h3>Ovo je APP</h3>
      <Home heroes={heroes}></Home>
      <Hero></Hero>
    </div>
  );
};

export default App;
