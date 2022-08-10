import './App.css'
import CurrentDate from './components/Date/Date'
import Clock from './components/Clock/Clock'
import Times from './components/Times/Times'
import { useEffect, useState } from 'react'
let trigger = false
let runningClock = null;

function App() {
  const [times, setTimes] = useState(['05:23.32', '12:23.45', '01:36.29'])
  let [ minutes, seconds, milliseconds] = [ 0, 0, 0]
 


  const runClock = () => {
    if (trigger) {
      return
    }
    let changingTime = times[0]
    trigger = true;
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
      changingTime = `${checkLength(minutes)}:${checkLength(seconds)}.${milliseconds}`
      
      setTimes(prevTimes => [
        changingTime, ...times
      ])
      
    }, 100)
  }

  const disableClock = () => {
    clearInterval(runningClock)
    trigger=false
  }

  const resetClock = () => {
    setTimes(['00:00.0'])
  }

  const lapClock = () => {
    clearInterval(runningClock)
    trigger=false;
    setTimes(prevTimes => [
      `${checkLength(minutes)}:${checkLength(seconds)}.${milliseconds}`, ...times
   ]) 
   runClock()
  }

  return (
    <div>
      <CurrentDate />
      <Clock times={times} lapClock={lapClock} resetClock={resetClock}disableClock={disableClock} runClock={runClock}/>
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
