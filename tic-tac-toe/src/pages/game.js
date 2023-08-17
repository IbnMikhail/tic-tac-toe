import React, { useState } from "react";
import BoxComponent from "../components/box";

function GamePage() {
  let [status, setStatus] = useState(false);
  return (
    <div className="game-board">
      <div className="status">{status}</div>
      <h1>Tic Tac Toe</h1>
      <div className="game-row">
        <BoxComponent number={1} />
        <BoxComponent number={2} />
        <BoxComponent number={3} />
      </div>

      <div className="game-row">
        <BoxComponent number={4} />
        <BoxComponent number={5} />
        <BoxComponent number={6} />
      </div>

      <div className="game-row">
        <BoxComponent number={7} />
        <BoxComponent number={8} />
        <BoxComponent number={9} />
      </div>
    </div>
  );
}

export default GamePage;
