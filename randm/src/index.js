import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'





ReactDOM.render(
  < App />

  ,

  document.getElementById('root')
);

fetch


/* const rickyEndPoint = `https://rickandmortyapi.com/api/character/`;

export async function getServerSideProps() {
  const res = await fetch(rickyEndPoint)
  const data = await res.json();
  return
} */

fetch('https://rickandmortyapi.com/api/character/')
  .then(results => results.json())
  .then(data => {
    console.log(data);

    /* data.results.map(character => {
      const div = document.createElement('div');
      div.classList.add('single-character');
      div.innerHTML = `<img src=${character.image} alt=${character.name}/><h3>${character.name}</h3>`
      const btn = document.createElement('button');
      btn.textContent = "Like";
      div.appendChild(btn);
      document.getElementById('characters').append(div); */
  })


