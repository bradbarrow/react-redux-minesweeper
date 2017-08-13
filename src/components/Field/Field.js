import React from 'react';
import './Field.css'
import Cell from '../../containers/Cell';

const Field = ({ rows }) => (
  <div>
    {
      rows.map((cols, row) => (
        <div className="row">
          {
            cols.map((cell, col) => (
              <Cell row={row} col={col}/>
            ))
          }
        </div>
      ))
    }
  </div>
);

export default Field;
