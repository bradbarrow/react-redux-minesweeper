import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const before = [
  ['?', '?', '?', '?', '?'],
  ['?', '?', '?', '?', '?'],
  ['?', '?', '?', '?', '?'],
  ['?', '?', '?', '?', '?'],
  ['?', '?', '?', '?', '?'],
];

const after = [
  [1, 1, 1, 0, 0],
  [1, -1, 2, 1, 0],
  [1, 2, -1, 1, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
];

class Cell extends Component {
  render() {
      // const { revealed } = this.state;
      // const { value } = this.props;

      return (
        <span onClick={this.props.handleClick}></span>
      );
  }
}

const Field = ({ field }) => (
  <div>
   { field.map((row, y) => (
    <div>
      {
        row.map((value, x) => (
          <Cell value={value} onClick={() => {
            this.props.handleClick(x, y)
          }} />
        ))
      }
    </div>
  )) }
  </div>
);

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      before: before,
      after: after,
      current: before,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ x, y }) {
    console.log('x,y', x, y);
    // this.setState({
    //
    // })
  }

  render() {
    return (
      <div>
        <Field field={this.state.current} onClick={this.handleClick} />
      </div>
    );
  }
}

export default Game;
