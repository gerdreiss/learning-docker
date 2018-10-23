import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello there from AWS Elastic Beanstalk!<br/>
            To learn how to deploy dockerized apps to AWS Elastic Beanstalk, 
          </p>
          <p>click <a
            className="App-link"
            href="https://www.udemy.com/docker-and-kubernetes-the-complete-guide"
            target="_blank"
            rel="noopener noreferrer">here</a>.</p>
        </header>
      </div>
    );
  }
}

export default App;
