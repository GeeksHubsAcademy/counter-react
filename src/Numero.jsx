import React from 'react';
import PropTypes from 'prop-types';
import './numero.css';

// let Numero = props => <div>{props.num}</div>;

// function Numero(props) {
//   return <div>{props.num}</div>;
// }

// let Numero = function(props) {
//   return <div>{props.num}</div>;
// };

class Numero extends React.Component {
  // constructor(p) {
  //   super(p);
  // }
  static propTypes = {
    num: PropTypes.number.isRequired,
  };
  // static defaultProps = {
  //   num: 666,
  // };
  componentDidMount() {
    console.log('me he montado bien!,  me han pasado estas props', this.props);
  }
  render() {
    return (
      <div className='Numero'>
        <h3> {this.props.num + ''}</h3>
        <div> {this.props.children}</div>
        <hr />
      </div>
    );
  }
}

export default Numero;
