import { connect } from 'react-redux';
import Field from '../../components/Field';

export default connect(
  state => ({ rows: state.field }),
)(Field);

