import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './components/navbar/Navbar';
import Route from './components/route/Route';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar />
         <Route /> 
      </div>
      </Router>
    );
  }
}

export default App;
