import React from "react";

const SudokuBoard = ({ player, grid, updateHandler }) => {
  return (
    <div className="container">
      <h1>Tic-Tac-Toe</h1>
      <h3>{`Player's ${player}`} TURN</h3>
      <div className="play-area">
        {grid.map((val, i) => {
          return val.map((e, j) => {
            return (
              <button
                className={"block"}
                onClick={() => {
                  updateHandler(i, j);
                }}
              >
                {e}
              </button>
            );
          });
        })}
      </div>
    </div>
  );
};

export default SudokuBoard;
