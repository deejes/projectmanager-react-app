import React, { Component } from 'react';
import './App.css';
import Projects from './Components/Projects'

class App extends Component {
  render() {
    return (
      <div className="App">
       This is my app 
        <Projects />
      </div>
    );
  }
}

export default App;
