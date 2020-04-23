import React from 'react';
import './enemyLife.css'

class EnemyLife extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="life__container">
        <p className="life__bar">{this.props.ennemy.powerstats.durability * 10}</p>
        <p className="life__bar">{this.props.ennemy.powerstats.power}</p>
      </div>
    )
  }
}

export default EnemyLife;