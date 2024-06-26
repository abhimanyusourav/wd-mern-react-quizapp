import { useContext, useEffect, useState } from 'react'
import Result from './Result'
import { myBasket } from '../App'

function Timer() {

  const { stage } = useContext(myBasket)

  const [minutes, setMinutes] = useState(15)
  const [seconds, setSeconds] = useState(0)

  useEffect(function () {

    const countdown = setInterval(function () {
      // Logic to generate the time (minutes + seconds)
      if (seconds > 0) {
        setSeconds(seconds - 1)
      } else {
        if (minutes > 0) {
          setMinutes(minutes - 1)
          setSeconds(59)
        }
      }
    }, 1000)
    return () => clearInterval(countdown)
  }, [minutes, seconds])

  function controlTimer () {
    if (minutes == 0 && seconds == 0) {
      return "Time is up!" && stage("result")
    } 
    // {minutes == 0 && seconds == 0 ? <h4>Your time is up!</h4> : null}
  }

  return (
    <div>
      <h3>{minutes < 10 ? `0${minutes}` : minutes} : {seconds < 10 ? `0${seconds}` : seconds}</h3>
      { controlTimer() }
    </div>
  )
}

export default Timer