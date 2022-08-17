import React, { Component } from "react";
import { FaDiceOne, FaDiceTwo, FaDiceThree, FaDiceFour, FaDiceFive, FaDiceSix, FaDiceD6 } from 'react-icons/fa'
import "./Die.css";

class Die extends Component {
  constructor(props){
    super(props);
    this.handleDisable = this.handleDisable.bind(this);
  }

  handleDisable(){
    this.props.handleClick(this.props.idx)
  }

  findIcon = () => {
    switch(this.props.val){
      case 1:
        return FaDiceOne
      case 2:
        return FaDiceTwo
      case 3:
        return FaDiceThree
      case 4:
        return FaDiceFour
      case 5:
        return FaDiceFive
      case 6:
        return FaDiceSix
      default:
        return FaDiceD6
    }
  }

  render() {
    const Logo = this.findIcon()
    return (
      <div>
        <Logo
          className={`Die ${this.props.locked ? "Die-locked" : (this.props.rolling ? "Die-rolling" : '')}`}
          onClick={this.handleDisable}
        />
      </div>
    );
  }
}

export default Die;
