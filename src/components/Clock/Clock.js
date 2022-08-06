import { useState } from 'react'
import './Clock.css'
import StopButton from '../StopButton/StopButton'
import LapButton from '../LapButton/LapButton'
import ResetButton from '../ResetButton/ResetButton'
import StartButton from '../StartButton/StartButton'
const Clock = () => {

    const [clock, setClock] = useState('0')
    const [running, setRunning] = useState(false)

    const toggle = () => {
        setRunning(prevRunning => !prevRunning)
    }

    
    
    return (
        <div id="clock-component-container">
            <div id="clock-container">
                <p id="clock">{clock}</p>
            </div>
            <div id="button-container">
                {running ? 
                <>
                <LapButton />
                <StopButton toggle={toggle}/>
                </>
                : 
                <>
                <ResetButton />
                <StartButton toggle={toggle}/>
                
                </>}
            </div>
            
        </div>

        
    )
}

export default Clock