import React, { Component } from 'react';
import Player from './Player/Player';
import './game.css';

import EnemyProfile from '../EnemyProfile/EnemyProfile'
import EnemyLife from '../EnemyLife/EnemyLife';
import PlayerStats from '../PlayerStats/PlayerStats';

const weapons = ['rock', 'paper', 'scissors'];

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOne: weapons[0],
      playerTwo: weapons[0],
      winner: '',
      interface: 'button',
      vilainLife: 840,
      vilainShield: 500,
      heroLife: 600,
      heroShield: 500,
    };
  }

  activButton = () => {
    this.setState({
      interface: 'button',
    });
  }

  transition = () => {
    this.setState({
      interface: 'choix',
    });
  }

    startGame = () => {
      let counter = 0;
      const gameInterval = setInterval(() => {
        counter += 1;
        this.setState({
          interface: 'resultats',
          playerTwo: weapons[Math.floor(Math.random() * weapons.length)],
          winner: '',
        });

        if (counter > 5) {
          clearInterval(gameInterval);
          this.setState({
            winner: this.selectWinner(),
          });
        }
      }, 100);
    };

    selectWinner = () => {
      const { playerOne, playerTwo } = this.state;
      if (playerOne === playerTwo) {
        return "It's a tie!";
      } if (
        (playerOne === 'rock' && playerTwo === 'scissors')
        || (playerOne === 'scissors' && playerTwo === 'paper')
        || (playerOne === 'paper' && playerTwo === 'rock')
      ) {
        return <p className="resultText">You Win !</p>;
      }
      return <p className="resultText">You Lose !</p>;
    };

    selecteWeapon = (weapon) => {
      this.setState({
        playerOne: weapon,
        winner: '',
      });
    };

    none = () => {
      this.setState({
        interface: 'none',
      });
    }


    render() {
      const { playerOne, playerTwo, winner } = this.state;
      const vilain = this.props.venom
      const superhero = this.props.spidey
      return (
        <div>
          <div className="interface__player">
            <div className="life__container">
              <p className="life__bar">{this.state.vilainLife}</p>
              <p className="life__bar">{this.state.vilainShield}</p>
            </div>
            <div className="profile__container">
              <img className="profile__img" src={vilain.image.url} alt='' />
            </div>
            <div className="playerstats__container">
              <h2>Nom : {vilain.name}</h2>
              <ul className="stats__list">
                <li>Intelligence : {vilain.powerstats.intelligence}</li>
                <li>Force : {vilain.powerstats.strength}</li>
                <li>Vitesse : {vilain.powerstats.speed}</li>
                <li>Puissance : {vilain.powerstats.power}</li>
              </ul>
            </div>
          </div>

          <div className="interface__gameplay">
            {this.state.interface === 'button' 
            ? 
            <div>
              <input type="button" className="styled" onClick={this.transition} value="Attack !"/>
              <input type="button" className="styled" onClick={this.transition} value="Defence !"/>
            </div>
            :
             <> </> }

            {this.state.interface === 'choix' 
            ? 
            <div>
              <div>
                <input type="image" src="https://zupimages.net/up/20/16/vmt5.jpg" className="weaponButton" onClick={() => this.selecteWeapon('rock')} alt="" />
                <input type="image" src="https://zupimages.net/up/20/16/vjv7.jpg" className="weaponButton" onClick={() => this.selecteWeapon('paper')} alt="" />
                <input type="image" src="https://zupimages.net/up/20/16/dfvh.jpg" className="weaponButton" onClick={() => this.selecteWeapon('scissors')} alt="" />
              </div>
              <input type="button" className="styled" onClick={this.startGame} value="Let's Fight !"/>
            </div>
            :
             <> </> }

            {this.state.interface === 'resultats' 
            ? 
            <div>
              <div className="winner">
                <Player weapon={playerTwo} />
                {winner ? this.selectWinner() : null}
                <Player weapon={playerOne} />
              </div>
              <input type="button" className="styled" onClick={this.none} value="Continue" />
            </div>
            :
             <> </> }
          </div>

          <div className="interface__player">
            <div className="life__container">
              <p className="life__bar">{this.state.heroLife}</p>
              <p className="life__bar">{this.state.heroLife}</p>
            </div>
            <div className="profile__container">
              <img className="profile__img" src={superhero.image.url} alt='' />
            </div>
            <div className="playerstats__container">
              <h2>Nom : {superhero.name}</h2>
              <ul className="stats__list">
                <li>Intelligence : {superhero.powerstats.intelligence}</li>
                <li>Force : {superhero.powerstats.strength}</li>
                <li>Vitesse : {superhero.powerstats.speed}</li>
                <li>Puissance : {superhero.powerstats.power}</li>
              </ul>
            </div>
          </div>
        </div>
      );
    }
}

export default Game;