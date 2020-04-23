import React from 'react';
import './playerStats.css';

class PlayerStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div className="playerstats__container">
          <ul className="stats__list">
            <li>Nom : {this.props.heroes[0].name}</li>
            <li>Intelligence : {this.props.heroes[0].powerstats.intelligence}</li>
            <li>Force : {this.props.heroes[0].powerstats.strength}</li>
            <li>Vitesse : {this.props.heroes[0].powerstats.speed}</li>
            <li>Puissance : {this.props.heroes[0].powerstats.power}</li>
          </ul>
        </div>
    );
  }
}

export default PlayerStats;