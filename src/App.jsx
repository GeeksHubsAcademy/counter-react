import React, { Component } from 'react';
import Counter from './Counter.jsx';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App-header'>
        <Counter amount={3} />
        <Counter from={12} />
        <Counter from='hola' max='6' amount='3' />
        <Counter from='33' amount='-4' />
      </div>
    );
  }
}

export default App;
