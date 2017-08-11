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

const Cell = ({ handleClick }) => (
  <span
    style={{ width: '20px', height: '20px', border: '1px solid'}}
    onClick={handleClick}>
  </span>
);


const Field = ({ field, handleClick }) => (
  <div>
    {
      field.map((row, y) => (
        <div style={{ display: 'flex', flexWrap: 'wrap'}}>
          {
            row.map((value, x) => (
              <Cell value={value} handleClick={() => handleClick(x, y)} />
            ))
          }
        </div>
      ))
    }
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

  handleClick(x, y) {
    console.log('x,y', x, y);
    // this.setState({
    //
    // })
  }

  render() {
    return (
      <div>
        <Field field={this.state.current} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default Game;
