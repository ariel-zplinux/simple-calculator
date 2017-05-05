import React, { Component } from 'react';
import '../style/App.css';
import Calculator from './Calculator.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}

export default App;
