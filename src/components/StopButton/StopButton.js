import './StopButton.css'

const StopButton = ({ toggle }) => {

    return (
        <button id='stop-btn' onClick={toggle}>Stop</button>
    )
}

export default StopButton