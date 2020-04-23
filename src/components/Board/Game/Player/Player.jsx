import React from 'react';
import rock from './img/pierre.jpg';
import paper from './img/feuille.jpg';
import scissors from './img/ciseaux.jpg';

const Player = ({ weapon }) => (
  <div className="player">
    <img className="player-image" src={weapon === 'rock' ? rock : weapon === 'paper' ? paper : scissors} alt="Rock Paper Scissors" />
  </div>
);

export default Player;
