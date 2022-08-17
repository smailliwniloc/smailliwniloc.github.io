import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {

  handleClick = () => {
    this.props.doScore()
    this.props.hasFinished()
  }

  render() {
    const enabled = this.props.score === undefined;
    return (
      <tr 
        className={`RuleRow RuleRow-${enabled ? "active" : "disabled"} ${this.props.rolling || !this.props.hasRolled ? "RuleRow-rolling" : ''}`}
        onClick={enabled && !(this.props.rolling || !this.props.hasRolled) ? this.handleClick : () => {return}}
      >
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{enabled ? this.props.description : this.props.score}</td>
      </tr>
    )
  }
}

export default RuleRow;