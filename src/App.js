import React, { useState } from "react";
import "./App.css";
import Player from "./Components/Player";
import Gameboard from "./Components/Gameboard";
import Log from "./Components/Log";
import { act } from "react-dom/test-utils";

function App() {
  const [gameTurn, setGameTurn] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  const handleSelectSquare = () => {
    setActivePlayer((currPlayer) => currPlayer === 'X' ? 'O' : 'X');
    setGameTurn();
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player playerName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
          <Player playerName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
        </ol>
        <Gameboard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </div>
    </main>
  );
}

export default App;
