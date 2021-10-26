import React from 'react';
import Header from './components/header/header';
import './App.css';
import MainPage from './components/content/mainPage'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <MainPage />
      </div>
    </div>
  );
}

export default App;
