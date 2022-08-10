import './StopButton.css'

const StopButton = ({ toggle, disableClock }) => {

    return (
        <button id='stop-btn' onClick={() => {
            toggle();
            disableClock();
        }}>Stop</button>
    )
}

export default StopButton