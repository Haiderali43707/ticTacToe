import React, { useState } from "react";
import "./Home.css";

const Choice = ({ player, setPlayer }) => {
  return (
    <>
      <div className="center">
        <h1 style={{ color: "black" }}>Choose Your Player</h1>
        <button className="btn btn-primary" onClick={() => setPlayer("X")}>
          Player X
        </button>
        <button className="btn btn-primary" onClick={() => setPlayer("O")}>
          Player O
        </button>
      </div>
    </>
  );
};

export default Choice;
