import React from 'react'
import { myBasket } from '../App'
import Timer from './Timer'

const questions = [
  {
    title: "What is the use of react?",
    A: "To cook food",
    B: "To play games",
    C: "To develop front-end",
    D: "All of the above",
    Answer: "C"
  },
  {
    title: "What is the primary use of python?",
    A: "To fly airplanes",
    B: "To perform data analysis",
    C: "To bake cookies",
    D: "All of the above",
    Answer: "B"
  },
  {
    title: "What is the purpose of SQL?",
    A: "To drive cars",
    B: "To manage databases",
    C: "To paint pictures",
    D: "All of the above",
    Answer: "B"
  },
  {
    title: "What is the role of Node.js?",
    A: "To compose music",
    B: "To build rockets",
    C: "To develop server-side applications",
    D: "All of the above",
    Answer: "C"
  }
]

function Question(props) {
  const { stage, myScore, mySetScore } = React.useContext(myBasket)
  const [questionIndex, setQuestionIndex] = React.useState(0)
  const [answerStatus, setAnswerStatus] = React.useState(false)

  function goToNextQuestion() {
    if (answerStatus) {
      setAnswerStatus(false)
      setQuestionIndex(questionIndex + 1)
    } else {
      alert("Please select the answer and then continue")
    }
  }

  function collectAnswer(selectedAnswer) {
    if (questions[questionIndex].Answer == selectedAnswer) {
      mySetScore(myScore + 1)
    } else {
      if (myScore < 0) {
        myScore = 0
      } else {
        mySetScore(myScore - 1)
      }
    }
    setAnswerStatus(true)
  }

  function goToResult() {
    if (answerStatus) {
      setAnswerStatus(false)
      stage("result")
    } else {
      alert("Please select the answer and then continue")
    }
  }

  return (
    <div>
      {props.children}
      <h2>{questions[questionIndex].title}</h2>
      <button onClick={function () {
        collectAnswer("A")
      }} >{questions[questionIndex].A}</button>
      <button onClick={function () {
        collectAnswer("B")
      }} >{questions[questionIndex].B}</button>
      <button onClick={function () {
        collectAnswer("C")
      }} >{questions[questionIndex].C}</button>
      <button onClick={function () {
        collectAnswer("D")
      }} >{questions[questionIndex].D}</button>
      {questionIndex == questions.length - 1 ? <button onClick={goToResult} >Submit</button> : <button onClick={goToNextQuestion} >Next</button>}
    </div>
  )
}

export default Question