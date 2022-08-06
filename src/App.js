import './App.css'
import CurrentDate from './components/Date/Date'
import Clock from './components/Clock/Clock'
import Times from './components/Times/Times'
import { useState } from 'react'
function App() {
  const [times, setTimes] = useState(['05:23.32', '12:23.45', '01:36.29'])
  return (
    <div>
      <CurrentDate />
      <Clock setTimes={setTimes}/>
      <Times times={times}/>
    </div>
    
  )
}

export default App;
