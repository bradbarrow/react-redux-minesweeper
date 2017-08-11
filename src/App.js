import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Minesweeper from './ducks/minesweeper';

const styles = {
  row: { display: 'flex', flexWrap: 'wrap' },
  cell: {
    width: '50px',
    height: '50px',
    background: 'whitesmoke',
    margin: '2px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const Cell = connect(
  (s,p) => {
    const { revealed, value } = s.field[p.row][p.col];
    return { revealed, value };
  },
  { handleClick: Minesweeper.revealCell },
)(({ row, col, handleClick, revealed, value }) => (
  <div
    style={styles.cell}
    onClick={() => handleClick(row, col)}
  >
    { revealed && value }
  </div>
));

const Field = connect(
  s => ({ rows: s.field }),
)(({ rows }) => (
  <div>
    {
      rows.map((cols, row) => (
        <div style={styles.row}>
          {
            cols.map((cell, col) => (
              <Cell row={row} col={col}/>
            ))
          }
        </div>
      ))
    }
  </div>
));

class Game extends Component {
  componentDidMount() {
    this.props.init(this.props.field);
  }

  render() {
    const { won, lost } = this.props;

    return (
      <div>
        <Field />

        { lost && <span>You lose 💥</span> }
        { won && <span>You win 🏆</span> }
      </div>
    );
  }
}

export default connect(
  s => ({
    won: s.won,
    lost: s.lost,
  }),
  { init: Minesweeper.initialiseField }
)(Game);
