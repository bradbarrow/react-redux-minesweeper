import { connect } from 'react-redux';
import { initialiseField } from '../../ducks/minesweeper';
import Game from '../../components/Game';

export default connect(
  state => ({
    won: state.won,
    lost: state.lost,
  }),
  { init: initialiseField }
)(Game);
