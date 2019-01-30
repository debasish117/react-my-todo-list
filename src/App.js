import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainContent />
        <Footer />
      </div>
    );
  }
}

export default App;
