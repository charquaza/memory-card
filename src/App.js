import { useState, useEffect } from "react";
import Info from "./components/Info";
import Scoreboard from "./components/Scoreboard";
import CardContainer from "./components/CardContainer";
import "./App.css";

function App() {
  const [scores, setScores] = useState({currScore: 0, highScore: 0});

  useEffect(() => {
    if (scores.currScore === 25) {
      alert("You won!");
    }
  });

  function updateScores(incrementScore) {
    if (incrementScore) {
      setScores((prevScores) => {
        var newCurrScore = (prevScores.currScore === 25) ? 
          1 : (prevScores.currScore + 1);

        var newHighScore = (newCurrScore > prevScores.highScore) ?
          newCurrScore : prevScores.highScore;

        return {currScore: newCurrScore, highScore: newHighScore};
      });  
    } else {
      setScores({currScore: 1, highScore: scores.highScore});
    }
  }

  return (
    <>
      <Info />
      <Scoreboard currScore={scores.currScore} highScore={scores.highScore} />
      <CardContainer updateScores={updateScores} />
    </>
  );
}

export default App;
