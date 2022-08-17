import React, { Component } from 'react';
import RuleRow from './RuleRow';
import './ScoreTable.css';
import { ones, twos, threes, fours, fives, sixes, threeOfKind, fourOfKind, fullHouse, smallStraight, largeStraight, yahtzee, chance } from './Rules';


class ScoreTable extends Component {

  render() {
    const { scores, doScore } = this.props;

    const upper = [
      {name: "Ones", score: scores.ones, doScore: evt => doScore("ones", ones.evalRoll), description: "1 point per 1", rolling: this.props.rolling}, 
      {name: "Twos", score: scores.twos, doScore: evt => doScore("twos", twos.evalRoll), description: "2 points per 2", rolling: this.props.rolling}, 
      {name: "Threes", score: scores.threes, doScore: evt => doScore("threes", threes.evalRoll), description: "3 points per 3", rolling: this.props.rolling}, 
      {name: "Fours", score: scores.fours, doScore: evt => doScore("fours", fours.evalRoll), description: "4 points per 4", rolling: this.props.rolling}, 
      {name: "Fives", score: scores.fives, doScore: evt => doScore("fives", fives.evalRoll), description: "5 points per 5", rolling: this.props.rolling}, 
      {name: "Sixes", score: scores.sixes, doScore: evt => doScore("sixes", sixes.evalRoll), description: "6 points per 6", rolling: this.props.rolling}
    ]

    const lower = [
      {name: "Three of Kind", score: scores.threeOfKind, doScore: evt => doScore("threeOfKind", threeOfKind.evalRoll), description: "Sum all dice if 3 are the same", rolling: this.props.rolling}, 
      {name: "Four of Kind", score: scores.fourOfKind, doScore: evt => doScore("fourOfKind", fourOfKind.evalRoll), description: "Sum all dice if 4 are the same", rolling: this.props.rolling}, 
      {name: "Full House", score: scores.fullHouse, doScore: evt => doScore("fullHouse", fullHouse.evalRoll), description: "25 points for triple + pair", rolling: this.props.rolling}, 
      {name: "Small Straight", score: scores.smallStraight, doScore: evt => doScore("smallStraight", smallStraight.evalRoll), description: "30 points for 4 in a row", rolling: this.props.rolling}, 
      {name: "Large Straight", score: scores.largeStraight, doScore: evt => doScore("largeStraight", largeStraight.evalRoll), description: "40 points for 5 in a row", rolling: this.props.rolling}, 
      {name: "Yahtzee", score: scores.yahtzee, doScore: evt => doScore("yahtzee", yahtzee.evalRoll), description: "50 points for 5 of a kind", rolling: this.props.rolling}, 
      {name: "Chance", score: scores.chance, doScore: evt => doScore("chance", chance.evalRoll), description: "Sum of all dice", rolling: this.props.rolling}
    ]

    let upperScore = upper.reduce((a, b) => {
      if(b.score !== undefined){
        return a + b.score
      }
      else{
        return a
      }
    }, 0)

    let lowerScore = lower.reduce((a, b) => {
      if(b.score !== undefined){
        return a + b.score
      }
      else{
        return a
      }
    }, 0)

    let numEmpty = upper.filter(row => row.score === undefined).length + lower.filter(row => row.score === undefined).length

    return (
      <div className="ScoreTable">
        {numEmpty === 0 ? null : 
        <div>
          <section className="ScoreTable-section">
            <h2>Upper</h2>
            <table cellSpacing="0">
              <tbody>
                {upper.map(row => {
                  return <RuleRow 
                            name={row.name} 
                            score={row.score} 
                            doScore={row.doScore} 
                            description={row.description} 
                            rolling={row.rolling} 
                            key={row.name}
                            hasRolled={this.props.hasRolled}
                            hasFinished={numEmpty === 1 ? this.props.hasFinished : () => {return}}
                          />
                })}
              </tbody>
            </table>
          </section>
          <section className="ScoreTable-section ScoreTable-section-lower">
            <h2>Lower</h2>
            <table cellSpacing="0">
              <tbody>
              {lower.map(row => {
                  return <RuleRow 
                            name={row.name} 
                            score={row.score} 
                            doScore={row.doScore} 
                            description={row.description} 
                            rolling={row.rolling} 
                            key={row.name}
                            hasRolled={this.props.hasRolled}
                            hasFinished={numEmpty === 1 ? this.props.hasFinished : () => {return}}
                          />
                })}
              </tbody>
            </table>
          </section>
        </div>}
        <div>
          <h2>{`${numEmpty === 0 ? "Final" : "Current"} Score: ${upperScore + lowerScore}`}</h2>
            <div>
              <button onClick={this.props.handleReset} className="ScoreTable-button">{numEmpty === 0 ? "Play Again" : "Reset"}</button>
            </div>
        </div>
      </div>
    )
  }
}

export default ScoreTable;