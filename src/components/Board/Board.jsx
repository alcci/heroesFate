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
      <div className="board__container">
        <div className="interface__enemy">
          <EnemyLife className ="test" ennemy={this.props.heroes[0]}/>
          <EnemyProfile ennemy={this.props.heroes[0]}/>
          <PlayerStats heroes={this.props.heroes} />
        </div>
        <div className="interface__gameplay">
          <p> This is where the gameplay will happen</p>
        </div>
        <div className="interface__player">
          <EnemyLife className ="test" ennemy={this.props.heroes[0]}/>
          <EnemyProfile ennemy={this.props.heroes[0]}/>
          <PlayerStats heroes={this.props.heroes} />
        </div>
      </div>
    )
  }
}


export default Board;