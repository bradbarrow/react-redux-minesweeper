import React, { Component } from 'react';
import Field from '../../containers/Field';

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

export default Game;
