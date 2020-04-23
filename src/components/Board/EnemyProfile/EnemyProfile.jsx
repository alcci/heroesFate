import React from 'react';

class EnemyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <img src={this.props.ennemy.image.url} alt='' />
        <p>Vie = {this.props.ennemy.powerstats.durability * 10}</p>
        <p>Defense = {this.props.ennemy.powerstats.power}</p>
      </div>
    )
  }
}

export default EnemyProfile;
