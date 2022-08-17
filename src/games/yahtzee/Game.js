import React, { Component } from "react";
import Dice from "./Dice";
import ScoreTable from "./ScoreTable";
import "./Game.css";

const NUM_DICE = 5;
const NUM_ROLLS = 3;

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState();
    this.roll = this.roll.bind(this);
    this.toggleLocked = this.toggleLocked.bind(this);
    this.doScore = this.doScore.bind(this);
  }

  initialState = () => {
    return {
    dice: Array.from({ length: NUM_DICE }),
    locked: Array(NUM_DICE).fill(false),
    rollsLeft: NUM_ROLLS,
    rolling: false,
    hasRolled: false,
    hasFinished: false,
    scores: {
      ones: undefined,
      twos: undefined,
      threes: undefined,
      fours: undefined,
      fives: undefined,
      sixes: undefined,
      threeOfKind: undefined,
      fourOfKind: undefined,
      fullHouse: undefined,
      smallStraight: undefined,
      largeStraight: undefined,
      yahtzee: undefined,
      chance: undefined
    }
  }}

  reset = () => {
    this.setState(this.initialState())
  }

  roll(evt) {
    // roll dice whose indexes are in reroll
    this.setState(st => ({
      dice: st.dice.map((d, i) =>
        st.locked[i] ? d : Math.ceil(Math.random() * 6)
      ),
      locked: st.rollsLeft > 1 ? st.locked : Array(NUM_DICE).fill(true),
      rollsLeft: st.rollsLeft - 1,
      rolling: true,
      hasRolled: true, 
      hasFinished: false
    }));

    setTimeout(() => {
      this.setState({ rolling: false})
    }, 1000);
  }

  toggleLocked(idx) {
    // toggle whether idx is in locked or not
    console.log(idx)
    this.setState(st => ({
      locked: [
        ...st.locked.slice(0, idx),
        !st.locked[idx],
        ...st.locked.slice(idx + 1)
      ]
    }));
  }

  doScore(rulename, ruleFn) {
    // evaluate this ruleFn with the dice and score this rulename
    this.setState(st => ({
      scores: { ...st.scores, [rulename]: ruleFn(this.state.dice) },
      rollsLeft: NUM_ROLLS,
      locked: Array(NUM_DICE).fill(false)
    }));
    if(!this.state.hasFinished){
      this.roll();
    }
  }

  finished = () => {
    console.log("winner")
    this.setState({hasFinished: true})
  }

  render() {
    return (
      <div className='Game'>
        <header className='Game-header'>
          <h1 className='App-title'>Yahtzee!</h1>
          {!this.state.hasFinished ? (
          <section className='Game-dice-section'>
            <Dice
              dice={this.state.dice}
              locked={this.state.locked}
              handleClick={this.toggleLocked}
              rolling={this.state.rolling}
            />
            <div className='Game-button-wrapper'>
              <button
                className='Game-reroll'
                disabled={this.state.locked.every(x => x) || this.state.rollsLeft === 0 || this.state.rolling}
                onClick={this.roll}
              >
                {this.state.rollsLeft} Rerolls Left
              </button>
            </div>
          </section>) : null}
        </header>
        <ScoreTable doScore={this.doScore} hasFinished = {this.finished} scores={this.state.scores} rolling={this.state.rolling} handleReset={this.reset} hasRolled={this.state.hasRolled}/>
      </div>
    );
  }
}

export default Game;
