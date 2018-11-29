import React, { Component } from 'react';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h1>Rostered</h1>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
