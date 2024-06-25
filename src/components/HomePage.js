import { useContext } from "react"
import { myBasket } from "../App"

function HomePage() {

  const {stage} = useContext(myBasket)

  function goToQuestion() {
    stage("question")
  }

  return (

    <div>
      <button onClick={goToQuestion} >Start Quiz</button>
    </div>

  )
}

export default HomePage