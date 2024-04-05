import React, { useState } from "react";



const GameBoard = ({ onSelectSquare, board }) => {
  return (
    <div className="flex  justify-center items-center pt-12">
      <ol className=" grid gap-4 grid-cols-3 justify-items-center">
        {board.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol className="grid grid-row-3 gap-4">
              {row.map((palyerSymbol, colIndex) => (
                <li key={colIndex}>
                  <button
                    onClick={() => onSelectSquare(rowIndex, colIndex)}
                    disabled={palyerSymbol !== null}
                    className="w-24 h-24 bg-[#203056]"
                  >
                    <span className="text-3xl">{palyerSymbol}</span>
                  </button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default GameBoard;
