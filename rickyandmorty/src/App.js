import { render } from '@testing-library/react';
import React, { useState } from 'react';
import Header from './components/Header';
import { Characters } from './components/Characters';
import './App.css';


function App() {

  return (
    <div>
      <Header />
      <Characters />
    </div>

  )

}

export default App;
