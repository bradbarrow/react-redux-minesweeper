import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
        <Field rows=[[1,2], [3,4]]/>
      </div>
    );
  }
}

export default Game;
