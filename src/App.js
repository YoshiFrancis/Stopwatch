import './App.css'
import CurrentDate from './components/Date/Date'
import Clock from './components/Clock/Clock'
import Times from './components/Times/Times'
import { useState } from 'react'
function App() {
  const [times, setTimes] = useState(['0', '05:23.32', '12:23.45', '01:36.29'])
  let [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0]
  let runningClock = null;

  const runClock = () => {
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
        hours++
      }
      setTimes(prevTimes => [
        `${minutes}:${seconds}.${milliseconds}`, ...times
      ])
    }, 100)
  }

  const disableClock = () => {
    clearInterval(runningClock)
  }

  return (
    <div>
      <CurrentDate />
      <Clock times={times} disableClock={disableClock} runClock={runClock}/>
      <Times times={times}/>
    </div>
    
  )
}

export default App;
