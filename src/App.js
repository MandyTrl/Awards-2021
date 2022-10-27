import React from 'react';
import './App.css';
import Ballot from "./Components/Ballot";
import VoteReducer from "./Reducer/vote.reducer";
import {Provider} from "react-redux";
import {createStore, combineReducers}  from "redux";

const store = createStore(combineReducers({VoteReducer}));

function App() {
  // Feel free to remove the contents of the header tag to make more room for your code
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <h1>Movie Awards 2021</h1>
        <img class= "icon" src= "../Images/medaille.png" alt= "award medal" />
        <Ballot />
      </header>
    </div>
    </Provider>
  );
}

export default App;
