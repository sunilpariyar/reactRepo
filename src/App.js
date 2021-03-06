import React, { Component } from 'react';
import logo from './logo.svg';
// import Galaxy from './components/Galaxy.jpg';
import Navbar from './components/navbar/Navbar';
import Route from './components/route/Route';
import Myfooter from './components/footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>  
        <div className="App-main"  >
          <Navbar />
          <Route />  
          <Myfooter />
        </div>  
      </Router>
    );
  }
}

export default App;
