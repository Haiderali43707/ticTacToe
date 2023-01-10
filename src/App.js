import React, { useState } from "react";
import Choice from "./component/Choice";
import GamePlay from "./component/GamePlay";

const App = () => {
  const [player, setPlayer] = useState("");
  return (
    <div> {
      player === "" ? (
        <Choice setPlayer={setPlayer} />
      ) : (
        <GamePlay player={player} setPlayer={setPlayer} />)
    }
    </div>
  );
};

export default App;
