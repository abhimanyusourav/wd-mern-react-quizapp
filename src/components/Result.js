import React from 'react'
import { myBasket } from '../App'

function Result() {

  const {myScore} = React.useContext(myBasket)

  return (
    <div>
      <h1>Your total score is: {myScore}</h1>
    </div>
  )
}

export default Result