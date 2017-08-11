import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const field = [
  [1, 1, 1, 0, 0],
  [1, -1, 2, 1, 0],
  [1, 2, -1, 1, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
];

const Field = ({ field }) => (
  <div>
   { field.map(row => (
    <div>
      {
        row.map(value => (
          <span>
            { value }
          </span>
        ))
      }
    </div>
  )) }
  </div>
)

class Game extends Component {
  render() {
    return (
      <div>
        <Field field={field}/>
      </div>
    );
  }
}

export default Game;
