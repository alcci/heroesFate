import React from 'react';
import './board.css';
import PlayerStats from './PlayerStats/PlayerStats';
import Game from './Game/Game';
import EnemyProfile from './EnemyProfile/EnemyProfile'
import EnemyLife from './EnemyLife/EnemyLife';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div>
          <Game venom={this.props.heroes[0]} spidey={this.props.heroes[1]} />
        </div>
    )
  }
}


export default Board;