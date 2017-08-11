import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import Game from './App';
import { reducer } from './ducks/minesweeper';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const field = [
  [ 1,  1,  1, 0, 0 ],
  [ 1, -1,  2, 1, 0 ],
  [ 1,  2, -1, 1, 0 ],
  [ 0,  1,  1, 1, 0 ],
  [ 0,  0,  0, 0, 0 ],
];

ReactDOM.render(
  <Provider store={store}>
    <Game field={field} />
  </Provider>,
  document.getElementById('root')
);
