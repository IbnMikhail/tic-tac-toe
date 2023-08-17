import React, { useState } from "react";
import BoxComponent from "../components/box";

function GamePage() {
  const [gameBoard, setGameBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(true);

  // const handleClick = (index) => {
  //   const newBoard = [...gameBoard];
  //   if (calculateWinner(gameBoard) || newBoard[index]) return;
  //   newBoard[index] = turn ? "X" : "O";
  //   setGameBoard(newBoard);
  //   setTurn(!turn);
  // };

  const handleRestart = () => {
    setGameBoard(Array(9).fill(null));
    setTurn(true);
  };

  const handleClick = (index) => {
    const updatedBoard = [...gameBoard];
    if (calculateWinner(updatedBoard) || updatedBoard[index]) return;
    updatedBoard[index] = turn ? "X" : "O";
    setGameBoard(updatedBoard);
    setTurn(!turn);
  };

  const renderSquare = (index) => (
    <BoxComponent value={gameBoard[index]} onClick={() => handleClick(index)} />
  );

  const winner = calculateWinner(gameBoard);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${turn ? "Player One" : "Player Two"}`;

  return (
    <div className="game-board">
      <div className="status">{status}</div>
      <h1>Tic Tac Toe</h1>
      <div className="board">
        <div className="game-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>

        <div className="game-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>

        <div className="game-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <button className="restart" onClick={handleRestart}>
        Restart
      </button>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default GamePage;
