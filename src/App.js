import React from 'react';
import './App.css';
import Ballot from "./Components/Ballot";

function App() {
  // Feel free to remove the contents of the header tag to make more room for your code
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Awards 2021</h1>
        <img class= "icon" src= "../Images/medaille.png" alt= "award medal" />
        <Ballot />
      </header>
    </div>
  );
}

export default App;
