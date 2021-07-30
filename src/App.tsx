import React, { createContext } from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import HomePage from './components/home/HomePage';
import Individuals from './components/list/Individuals';
import ProfilePage from './components/profile/ProfilePage';
import Results from './components/results/Results';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={HomePage} exact></Route>
      <Route path="/profile/:name" component={ProfilePage} exact></Route>
      <Route path="/results/:name" component={Results} exact></Route>
      <Route path="/species/:id" component={Individuals}></Route>
    </BrowserRouter>
  );
}

export default App;
