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

class Cell extends Component {
  constructor(props) {
    super(props);

    this.state = {
      revealed: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      revealed: true,
    });
  }

  render() {
      const { revealed } = this.state;
      const { value } = this.props;

      return (
        <span onClick={this.handleClick}>{ revealed ? value : '?' }</span>
      );
  }
}

const Field = ({ field }) => (
  <div>
   { field.map(row => (
    <div>
      {
        row.map(value => (
          <Cell value={value} />
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
