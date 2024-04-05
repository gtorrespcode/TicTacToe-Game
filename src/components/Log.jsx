import React from "react";

const Log = ({ turns }) => {
  return (
    <ol className="flex flex-col text-[#203056] items-center justify-center pt-4">
      {turns.map((turn) => (
         <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} selected {turn.square.row},{turn.square.col}
        </li>
      ))}
    </ol>
  );
};

export default Log;
