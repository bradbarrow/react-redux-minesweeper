import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const rows = [
  [1, 1, 1, 0, 0],
  [1, -1, 2, 1, 0],
  [1, 2, -1, 1, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
];

const Field = ({ rows }) => (
  rows.map(cols => (
    <div>
      {
        cols.map(col => (
          <div>
            { col }
          </div>
        ))
      }
    </div>
  ))
)

class Game extends Component {
  render() {
    return (
      <div>
        <Field rows={rows}/>
      </div>
    );
  }
}

export default Game;
