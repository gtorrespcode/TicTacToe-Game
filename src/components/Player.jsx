import React, { useState } from "react";

const Player = ({ name, symbol, isActive, onChangeName }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const handleEdit = () => {
    setIsEditing((edit) => !edit);

    if (isEditing){
      onChangeName(symbol, playerName);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleEdit();
    }
  };

  return (
    <li>
      <span
        className={
          isActive
            ? "flex gap-x-4 border-2 px-4 py-2 border-[#E27789]"
            : "flex gap-x-4 px-4 py-2"
        }
      >
        {isEditing ? (
          <input
            className=" w-36 text-[#E27789] bg-[#203056] px-4 py-[1px] focus:outline-none focus:border focus:border-[#E27789]"
            type="text"
            value={playerName}
            required
            onKeyDown={handleKeyDown}
            onChange={(e) => setPlayerName(e.target.value)}
          />
        ) : (
          <span>{playerName}</span>
        )}
        <span className="ml-2">{symbol}</span>
        <button
          onClick={handleEdit}
          className="text-[#EA9CA9] hover:text-[#E27789] text-sm"
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </span>
    </li>
  );
};

export default Player;
