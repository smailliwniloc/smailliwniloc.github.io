import React, {Component} from 'react';
import './Games.css';
import Board from './lights-out/Board';
import Yahtzee from './yahtzee/Game';
  
class Games extends Component {
    constructor(props){
        super(props);
        this.state = {view: "home"}
    }

    changeView = () => {
        if(this.state.view === "home"){
            this.setState({view: "board"})
        }
        else{
            this.setState({view: "home"})
        }
    }

    render() {
        return (
            <div className="Games">
                <div>
                    <button onClick={this.changeView}>Switch Game</button>
                </div>
                {this.state.view === "board" ? <Board nrows={5} ncols={5}/> : <Yahtzee/>}
             </div>
        )
    } 
};
  
export default Games;