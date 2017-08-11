export const INITIALISE_FIELD = 'minesweeper/INITIALISE_FIELD';
export const REVEAL_CELL = 'minesweeper/REVEAL_CELL';

const defaultState = {
  field: [],
  won: false,
  lost: false,
};

const coordinateFinder = {
  NW: (row, col) => ({ col: col-1, row: row-1 }),
  N:  (row, col) => ({ col,        row: row-1 }),
  NE: (row, col) => ({ col: col+1, row: row-1 }),
  E:  (row, col) => ({ col: col+1, row        }),
  SE: (row, col) => ({ col: col+1, row: row+1 }),
  S:  (row, col) => ({ col,        row: row+1 }),
  SW: (row, col) => ({ col: col-1, row: row+1 }),
  W:  (row, col) => ({ col: col-1, row        }),
};

const loseCondition = ({ row, col }, field) => (
  field[row][col].value === -1
);

const winCondition = ({ row, col }, field) => (
  [].concat.apply([], field)
    .filter(cell => !cell.revealed)
    .every(cell => cell.value === -1)
);

const createField = rows => rows.map(cols => cols.map(cell => ({
  value: cell,
  revealed: false,
})));

const isValidCell = (row, column, size) => (
  row >= 0 && row < size && column >= 0 && column < size
);

const adjacentToRevealedZero = (row, col, rows) => {
  return Object.keys(coordinateFinder).reduce((isAdjacent, dir) => {
    const { row: r, col: c } = coordinateFinder[dir](row, col);
    const valid = isValidCell(r, c, rows.length);

    if(valid && rows[r][c].value === 0 && rows[r][c].revealed) {
      isAdjacent = true;
    }

    return isAdjacent;
  }, false);
};

const reveal = (row, col, rows) => {
  // Reveal the given cell
  rows[row][col].revealed = true;

  // Pass over the grid as many times as necessary
  let shouldRevealAgain = true;

  while (shouldRevealAgain) {
    shouldRevealAgain = false;

    rows = rows.map((cols, r) => cols.map((cell, c) => {
      // if this cell is adjacent to a revealed 0 then reveal it
      if (!cell.revealed && adjacentToRevealedZero(r, c, rows)) {
        shouldRevealAgain = true;
        return { ...cell, revealed: true };
      }

      return cell;
    }));
  }

  return rows;
}

export const reducer = (state = defaultState, { type, payload }) => {
  switch(type) {
    case INITIALISE_FIELD:
      return { ...state, field: createField(payload) };
    case REVEAL_CELL:
      const { row, col } = payload;
      let newField = [ ...state.field ];

      // Reveal from the given cell outward
      newField = reveal(row, col, newField);

      // Follow Up
      if (loseCondition(payload, newField)) {
        return { ...state, lost: true };
      }

      if (winCondition(payload, newField)) {
        return { ...state, won: true };
      }

      return { ...state, field: newField };
    default:
      return state;
  }
}

export const initialiseField = (field) => ({
  type: INITIALISE_FIELD,
  payload: field,
});

export const revealCell = (row, col) => ({
  type: REVEAL_CELL,
  payload: { row, col },
});
