import './App.css';
import React from 'react';
import {
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';
import StartGame from './modules/start-game';
import MainGame from './modules/main-game';

const App = () => {
  return <Router>
    <Route exact path='/' component={() => <StartGame/>}/>
    <Route path='/game' component={() => <MainGame/>}/>
  </Router>;
}


export default App;

