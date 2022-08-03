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

    this.state = { 
      board : this.createBoard(true), 
      hasWon : false,
      difficulty: 0, 
      moves: 0
    };
    this.flipCellsAround = this.flipCellsAround.bind(this);
    this.createBoard = this.createBoard.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.handleQuit = this.handleQuit.bind(this);
    this.handleDifficulty = this.handleDifficulty.bind(this);
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard(initial, difficulty) {
    let {nrows, ncols} = this.props;
    let board;
    console.log("New board")
    console.log("Testing the build")
    if(initial){
      board = [...Array(nrows)].map(() => Array(ncols).fill(false));
      return board;
    }
    else{
      let fakeBoard = [...Array(nrows)].map(() => Array(ncols).fill(false));
      let x;
      let y;
      for(let i = 0; i < difficulty; i++){
        do{
          x = Math.floor(Math.random()*ncols)
          y = Math.floor(Math.random()*nrows)
        }
        while(fakeBoard[x][y])
        fakeBoard[x][y] = !fakeBoard[x][y]
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
      hasWon = hasWon && board[i].every(val => !val)
    }
    let moves = this.state.moves + 1
    this.setState({board, hasWon, moves});
  }


  handleStart(evt) {
    let difficulty = evt.target.value
    let moves = 0
    this.createBoard(false, difficulty)
    this.setState({difficulty, moves})
  }

  handleDifficulty() {
    let difficulty = -1
    this.setState({difficulty})
  }

  handleQuit() {
    let board = this.createBoard(true)
    let hasWon = false
    let difficulty = 0
    let moves = 0
    this.setState({board, hasWon, difficulty, moves})
  }

  render() {

    return(
      <div className="Top">
        {this.state.hasWon ? 
          <div className="Board-winner">
            <span className="neon-orange">You</span>
            <span className="neon-blue">Win!</span>
            <button className="Board-button" onClick={this.handleQuit}>Play again!</button>
          </div> : 
          <>
          <div className="Board-title">
            <span className="neon-orange">Lights</span>
            <span className="neon-blue">Out</span>
          </div>
          <div className="Board-buttons">
            <button className="Board-button" onClick={this.handleDifficulty}>Start</button>
            <button className="Board-button" onClick={this.handleQuit}>Quit</button>
          </div>
          {this.state.difficulty === -1 ? 
          <div className="Board-buttons">
            <button className="Board-button" onClick={this.handleStart} value={3} title="Can be won in 3 moves or less">Easy</button>
            <button className="Board-button" onClick={this.handleStart} value={6} title="Can be won in 6 moves or less">Normal</button>
            <button className="Board-button" onClick={this.handleStart} value={12} title="Can be won in 12 moves or less">Hard</button>
          </div> : null}
          <table className="Board">
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
          </>
        }
        <div className="Board-counter">{`Moves: ${this.state.moves}`}</div>
      </div>
    )

  }
}

export default Board;