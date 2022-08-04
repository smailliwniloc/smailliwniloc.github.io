import React, {Component} from 'react';
import Board from '../games/lights-out/Board';
  
class Games extends Component {
  render() {
    return (
        <div>
            <Board nrows={5} ncols={5}/>
        </div>
    )
  } 
};
  
export default Games;