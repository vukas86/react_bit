import React from 'react';
import Header from "./components/Header"
import './App.css';

function App() {
  return (
    //BEM class naming convetnition
    <div className="App">
{/* <h1>Lets Build YT Clone</h1> */}
<Header />
<Sidebar />
{/* sidebar */}
{/* recomendedVideos */}
</div>
  );
}

export default App;
