import './App.css'
import CurrentDate from './components/Date/Date'
import Clock from './components/Clock/Clock'
import Times from './components/Times/Times'
import { useCallback, useEffect, useState, useRef } from 'react'
let trigger = false
let runningClock = null;
let newClock = true;
function App() {
  const [times, setTimes] = useState(['05:23.32', '12:23.45', '01:36.29'])
  let [ minutes, seconds, milliseconds] = [ useRef(0), useRef(0), useRef(0)]




  const runClock = () => {
    if (trigger) {
      return
    }
    let changingTime = times[0]
    trigger = true;
    runningClock = setInterval(() => {
      
      if (newClock) {
        newClock = false;
        setTimes(prevTimes => [changingTime])
      } else {
          if (milliseconds.current === 9) {
            seconds.current = seconds.current + 1;
            milliseconds.current = 0;
          } else {
            milliseconds.current = milliseconds.current + 1;
          }
          if (seconds.current === 60) {
            seconds.current = 0;
            minutes.current = minutes.current + 1
          }
          if (minutes.current === 60) {
            minutes.current = 0;
          }
          changingTime = `${checkLength(minutes.current)}:${checkLength(seconds.current)}.${milliseconds.current}`
          let x = times.slice(1)
          x[0] = changingTime + ''
          setTimes(prevTimes => [
            changingTime, ...prevTimes.slice(1)
          ])
      }
    }, 100)
  }

  const disableClock = useCallback(() => {
      clearInterval(runningClock)
      trigger=false
    }, [])

    useEffect(() => {
      setTimes(prevTimes => ([
        ...prevTimes.slice(1)
      ]))
    }, [disableClock])

  const resetClock = () => {
    setTimes(['00:00.0'])
    newClock = true;
  }

  const lapClock = () => {
    clearInterval(runningClock)
    trigger=false;
    milliseconds.current = 0;
    minutes.current = 0;
    seconds.current = 0
    
    setTimes(prevTimes => [
      '00:00.0', ...times
    ])
   runClock();
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
