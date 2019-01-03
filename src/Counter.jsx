import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: Number(props.from) || 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return <div onClick={this.increment}>{this.state.count}</div>;
  }
}

export default Counter;
