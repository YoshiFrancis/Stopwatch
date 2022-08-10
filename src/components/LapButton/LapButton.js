import './LapButton.css'

const LapButton = ({ lapClock }) => {

    return (
        <button id="lap-btn" onClick={lapClock}>Lap</button>
    )
}

export default LapButton