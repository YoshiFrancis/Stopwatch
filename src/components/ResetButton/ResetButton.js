import './ResetButton.css'

const ResetButton = ({ resetClock }) => {
    return (
        <button id="reset-btn" onClick={resetClock}>Reset</button>
    )
}

export default ResetButton