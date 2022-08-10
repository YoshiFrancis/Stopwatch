import './App.css'
import CurrentDate from './components/Date/Date'
import Clock from './components/Clock/Clock'
import Times from './components/Times/Times'
import { useState } from 'react'
let trigger = false
let runningClock = null;
function App() {
  const [times, setTimes] = useState(['0', '05:23.32', '12:23.45', '01:36.29'])
  let [ minutes, seconds, milliseconds] = [0, 0, 0, 0]
  
  
  const runClock = () => {
    console.log("I am trigger", trigger)
    if (trigger) {
      return
    }
    console.log(runningClock, "This is in runClock function #13")
    if (runningClock) {
      console.log("LOL")
    } 
    runningClock = 1
    trigger = true;
    console.log(trigger, "this is trigger")
    console.log(runningClock, "This is in runClock function #18")
    runningClock = setInterval(() => {
      if (milliseconds === 9) {
        seconds++;
        milliseconds = 0
      } else {
        milliseconds++;
      }
      if (seconds === 60) {
        seconds = 0;
        minutes++
      }
      if (minutes === 60) {
        minutes = 0;
      }
      let tmp = [...times]
      tmp[0] = `${checkLength(minutes)}:${checkLength(seconds)}.${milliseconds}`
      setTimes(prevTimes => [
        ...tmp
      ])
    }, 100)
  }


  const disableClock = () => {
    console.log("HELLO")
    console.log(runningClock, "This is in disableClock function #44")
    clearInterval(runningClock)
    trigger=false
  }

  return (
    <div>
      <CurrentDate />
      <Clock times={times} disableClock={disableClock} runClock={runClock}/>
      <Times times={times}/>
    </div>
    
  )
}


const checkLength = (number) => {
  number = String(number)
  if (number.length < 2) {
      number = '0' + number
  }
  return number
}


export default App;
