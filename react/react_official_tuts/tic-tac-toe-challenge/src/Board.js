import React from "react";
import "./index.css";
import Box from "./Box";

const initState = {
  boxes: new Array(9).fill(null),
  xTurnIsNow: true,
}

class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = initState;
  }

  restartGame = () => {
    this.setState(initState);
  }

  renderBox = (id) => {
    return (
      <Box onChecked={() => this.onChecked(id)} value={this.state.boxes[id]} />
    )
  }

  onChecked = (i) => {
    if (this.checkForWinner(this.state.boxes)) {
      return;
    }
    const boxes = this.state.boxes.slice();
    if (boxes[i] != null) return;
    const box = boxes[i] = this.state.xTurnIsNow ? "X" : "O";
    this.setState({ boxes: [...boxes, box], xTurnIsNow: !this.state.xTurnIsNow, });
  }

  checkForWinner = (boxes) => {
    const winTable = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winTable.length; i++) {
      const [a, b, c] = winTable[i];
      if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
        return boxes[a];
      }
    }

    return null;
  }

  render() {
    const winner = this.checkForWinner(this.state.boxes);
    const status = winner ? `${winner} has WON!` : `Current Player: ${this.state.xTurnIsNow ? "X" : "O"}`;
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderBox(0)}
          {this.renderBox(1)}
          {this.renderBox(2)}
        </div>
        <div className="board-row">
          {this.renderBox(3)}
          {this.renderBox(4)}
          {this.renderBox(5)}
        </div>
        <div className="board-row">
          {this.renderBox(6)}
          {this.renderBox(7)}
          {this.renderBox(8)}
        </div>
        {winner ? <button className="button" onClick={() => this.restartGame()}>Restart Game</button> : null}
      </div>
    )
  }
}

export default Board;
