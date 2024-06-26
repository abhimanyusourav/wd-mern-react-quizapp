import { useState, createContext } from "react";
import HomePage from "./components/HomePage";
import Question from "./components/Question";
import Result from "./components/Result";
import Timer from "./components/Timer";

export const myBasket = createContext()


function App() {
  const [gameStage, setGameStage] = useState("home")
  const [score, setScore] = useState(0)

  return (
    <div>      
      <myBasket.Provider value={{ stage: setGameStage, myScore: score, mySetScore: setScore }}>
        {gameStage == "home" && <HomePage />}
        {gameStage == "question" && <Question><Timer /></Question>}
        {gameStage == "result" && <Result />}
      </myBasket.Provider>
    </div>
  );
}

export default App;
