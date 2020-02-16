import React from 'react';
import './App.css';

import Header from './components/layout/Header';
import Title from './components/layout/Title';
import Jumbo from './components/layout/Jumbotron';
import Service from './components/layout/Services';
import About from './components/layout/About';
import Footer from './components/layout/Footer';


function App() {
  return (
      <div className="App">
        <Header />
        <Title />
        <Jumbo />
        <About />
        <Service />
        <Footer />
      </div>
  );
}

export default App;
