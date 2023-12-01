import React, { useState } from "react";

const Player = ({ playerName, symbol, isActive }) => {
  const [editName, setEditName] = useState(false);
  const [username, setUsername] = useState(playerName);

  const nameEditHandler = () => {
    setEditName((editing) => !editing);
  };

  const saveNameHandler = (event) => {
    setUsername(event.target.value);
  };

  let name = <span className="player-name">{username}</span>;

  if (editName) {
    name = (
      <input type="text" required value={username} onChange={saveNameHandler} />
    );
  }
  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {name}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={nameEditHandler}>{editName ? " Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
