import React, { Component } from 'react';
import logo from './wmt.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to WomenTechMakers Frankfurt!
          </p>
          <a
            className="App-link"
            href="https://www.linkedin.com/company/women-techmakers-frankfurt/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Meet us!
          </a>
        </header>
      </div>
    );
  }
}

export default App;
