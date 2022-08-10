import './StartButton.css'

const StartButton = ({ toggle, runClock }) => {

    return (
        <button id='start-btn' onClick={() => {
            toggle();
            runClock();
        }}>start</button>
    )
}

export default StartButton