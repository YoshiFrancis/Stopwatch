import { useState } from 'react'
import './Clock.css'
import StopButton from '../StopButton/StopButton'
import LapButton from '../LapButton/LapButton'
import ResetButton from '../ResetButton/ResetButton'
import StartButton from '../StartButton/StartButton'
const Clock = ({ disableClock, runClock, times }) => {

    const [running, setRunning] = useState(false)

    const toggle = () => {
        setRunning(prevRunning => !prevRunning)
    }

    /*
    useEffect(() => {
        if (running) {
            runClock();
        } else {
            disableClock();
        }
    }, [running, runClock, disableClock])
*/
    
    return (
        <div id="clock-component-container">
            <div id="clock-container">
                <p id="clock">{times[0]}</p>
            </div>
            <div id="button-container">
                {running ? 
                <>
                <LapButton />
                <StopButton disableClock={disableClock} toggle={toggle}/>
                </>
                : 
                <>
                <ResetButton />
                <StartButton runClock={runClock} toggle={toggle}/>
                
                </>}
            </div>
            
        </div>

        
    )
}

export default Clock