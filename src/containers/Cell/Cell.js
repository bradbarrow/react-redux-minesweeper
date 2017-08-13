import { connect } from 'react-redux';
import { revealCell } from '../../ducks/minesweeper';
import Cell from '../../components/Cell';

export default connect(
  (state, props) => {
    const { revealed, value } = state.field[props.row][props.col];
    return { revealed, value };
  },
  { handleClick: revealCell },
)(Cell);

