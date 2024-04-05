import React from "react";

const GameOver = ({ winner, rematch }) => {
  return (
    <div className="absolute text-[#E27789] top-0 left-0 w-full h-full flex flex-col justify-center gap-y-8 items-center bg-[#203056] bg-opacity-95">
      <h2 className="text-5xl font-bold tracking-tight">Game Over!</h2>
      {winner && <p className="text-3xl">{winner} won!</p>}
      {!winner && <p className="text-3xl">It's a Draw!</p>}
      <p className="text-2xl">
        <button onClick={rematch} className="bg-[#E27789] text-[#203056] px-4 py-2 rounded-sm border-2 border-[#E27789] hover:bg-[#203056] hover:text-[#E27789] hover:border-[#E27789]">
          Rematch
        </button>
      </p>
    </div>
  );
};

export default GameOver;
