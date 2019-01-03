import React from 'react';
import './counter.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: Number(props.from) || 0 };
  }

  increment = () => {
    let amountToIncrement = Number(this.props.amount) || 1;

    if (!this.props.max || this.props.max >= this.state.count + amountToIncrement) {
      this.setState({ count: this.state.count + amountToIncrement });
    } else {
      this.setState({ count: Number(this.props.from) || 0 });
    }
  };

  render() {
    return (
      <div onClick={this.increment} className='counter'>
        <h3 className={this.state.count % 2 === 0 ? 'even' : 'odd'}>{this.state.count}</h3>
        <small>
          <pre>{JSON.stringify(this.props)}</pre>
        </small>
      </div>
    );
  }
}

export default Counter;
