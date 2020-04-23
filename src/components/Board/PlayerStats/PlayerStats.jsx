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
      <body>
        <div>
          <ul>
            <li>Nom : {this.props.heroes[0].name}</li>
            <li>Intelligence : {this.props.heroes[0].powerstats.intelligence}</li>
            <li>Force : {this.props.heroes[0].powerstats.strength}</li>
            <li>Vitesse : {this.props.heroes[0].powerstats.speed}</li>
            <li>Puissance : {this.props.heroes[0].powerstats.power}</li>
          </ul>
        </div>
      </body>
    );
  }
}

export default PlayerStats;