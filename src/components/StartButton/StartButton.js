import './StartButton.css'

const StartButton = ({ toggle }) => {

    return (
        <button id='start-btn' onClick={toggle}>start</button>
    )
}

export default StartButton