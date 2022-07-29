import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';


/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {

  constructor(props) {
    super(props);

    // TODO: set initial state
    this.state = { board : this.createBoard(true), hasWon : false };
    this.flipCellsAround = this.flipCellsAround.bind(this);
    this.createBoard = this.createBoard.bind(this);
    this.handleStart = this.handleStart.bind(this);
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard(initial) {
    let {nrows, ncols} = this.props;
    let board;
    if(initial){
      board = [...Array(nrows)].map(() => Array(ncols).fill(true));
      return board;
    }
    else{
      for(let i = 0; i < 10; i++){
        let x = Math.floor(Math.random()*ncols)
        let y = Math.floor(Math.random()*nrows)
        this.flipCellsAround([y,x])
      }
    }

    
    
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    let {ncols, nrows} = this.props;
    let board = this.state.board;
    let x = coord[1]
    let y = coord[0]
    console.log(`x = ${x} and y=${y}`)


    function flipCell(x, y) {
      // if this coord is actually on board, flip it
      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    flipCell(x, y)
    flipCell(x-1, y)
    flipCell(x+1, y)
    flipCell(x, y-1)
    flipCell(x, y+1)

    let hasWon = true;
    for(let i = 0; i < nrows; i++){
      hasWon = hasWon && board[i].every(val => val)
    }

    // TODO: flip this cell and the cells around it

    // win when every cell is turned off
    // TODO: determine is the game has been won

    this.setState({board, hasWon});
  }


  handleStart() {
    this.createBoard(false)
  }

  render() {

    return(
      <div>
        {this.state.hasWon ? "You win!" : 
      <table>
        <thead>
          <tr>
            <Cell isLit={false} handleClick={this.handleStart} />
          </tr>
        </thead>
        <tbody>
        {this.state.board.map((row, i) => (
          <tr key={i}>
          {row.map((isLit, j) => (
            <Cell isLit={isLit} handleClick={this.flipCellsAround} coord={[i,j]} key={[i,j]}/>
          ))}
          </tr>
        ))}
        </tbody>
      </table>
        }
      </div>
    )

  }
}

export default Board;