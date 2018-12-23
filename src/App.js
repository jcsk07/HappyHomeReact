import React, { Component } from 'react';
import './App.css';
import Read from './components/header';
import Navigate from './components/navigation';
import Dat from './components/functional';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Navigate />
       <Read name="Chandu" />
       <Dat name="koushik" ><p>you can and you should</p></Dat>
      </div>
    );
  }
}

export default App;
