import React, { useState } from "react";

const board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const Gameboard = ({onSelectSquare, activePlayerSymbol}) => {
  const [gameboard, setGameboard] = useState(board);

  const playerMoveHandler = (i, j) => {
    setGameboard((prevBoard) => {
        const updatedBoard = [...prevBoard.map((nestedArray) => [...nestedArray])]
        updatedBoard[i][j] = activePlayerSymbol;
        return updatedBoard;
    });

    onSelectSquare();
  }
  return (
    <ol id="game-board">
      {gameboard.map((row, i) => (
        <li key={i}>
          <ol>
            {row.map((playerSymbol, j) => (
              <li key={j}>
                <button onClick={() => playerMoveHandler(i, j)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default Gameboard;
