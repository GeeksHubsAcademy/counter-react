import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: Number(props.from) || 0 };
  }

  increment = () => {
    let amountToIncrement = Number(this.props.amount) || 1;
    this.setState({ count: this.state.count + amountToIncrement });
  };

  render() {
    return (
      <div onClick={this.increment}>
        <h3>{this.state.count}</h3>
        <small>
          <pre>{JSON.stringify(this.props)}</pre>
        </small>
      </div>
    );
  }
}

export default Counter;
