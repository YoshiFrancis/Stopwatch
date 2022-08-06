import './Times.css'

const Times = ({ times }) => {
    return (
        <div id="time-container">  
            <div>
                <hr></hr>
                <div className='time-item'>
                    <p>Lap {times.length}</p>
                    <p>{times[0]}</p>
                </div>
                <hr></hr>
            </div>
            {times
            .map(
                (time, index) => (
                    <div key={index}>
                        <div className='time-item'>
                            <p>Lap {times.length - index}</p>
                            <p>{time}</p>
                        </div>
                        <hr></hr>
                    </div>
                )
            )}
        </div>
    )
}

export default Times