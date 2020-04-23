import React from 'react';
import './enemyProfile.css'

class EnemyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="profile__container">
        <img className="profile__img" src={this.props.ennemy.image.url} alt='' />
      </div>
    )
  }
}

export default EnemyProfile;
