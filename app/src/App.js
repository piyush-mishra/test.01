import './App.css';
import React from 'react';
import HomeContainer from './Container/HomeContainer';
import Home from './Components/Home';
import Header from './Components/Header';
import HeaderContainer from './Container/HeaderContainer';

function App() {
  return (
    <div className="App">
      <HeaderContainer/>
         <HomeContainer/>
    </div>
  );
}

export default App;
