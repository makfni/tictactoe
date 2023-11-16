import React, {useState} from 'react';

const Player = ({playerName, symbol}) => {

    const [isEditName, setIsName] = useState(false);

    const nameEditHandler = () => {
        setIsName(true);
    }
    
    let name = <span className="player-name">{playerName}</span>

    if (isEditName) {
        name = <input type='text' required />
    }
    return (
        <li>
        <span className="player">
          {name}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={nameEditHandler}>Edit</button>
      </li>
    )
}

export default Player;