import React from 'react';
import './Cell.css';

const Cell = ({ row, col, handleClick, revealed, value }) => (
  <div
    className='cell'
    onClick={() => handleClick(row, col)}
  >
    { revealed && value }
  </div>
);

export default Cell;
