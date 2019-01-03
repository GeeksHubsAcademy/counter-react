import React, { Component } from 'react';
// import Numero from './Numero.jsx';
// import logo from './logo.svg';
import Counter from './Counter.jsx';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App-header'>
        <Counter />
        <Counter from={12} />
        <Counter from='hola' />
        <Counter from='33' />
      </div>
    );
  }
}

export default App;
