import './App.css'
import CurrentDate from './components/Date/Date'
import Clock from './components/Clock/Clock'
import LapButton from './components/LapButton/LapButton'
import StopButton from './components/StopButton/StopButton'
import Times from './components/Times/Times'
function App() {
  return (
    <div>
      <CurrentDate />
      <Clock />
      <LapButton />
      <StopButton />
      <Times />
    </div>
    
  )
}

export default App;
