import './Times.css'

const Times = ({ times }) => {

    let tempTimes = times.slice(0)
    let runningTime = tempTimes.splice(0, 1)
    return (
        <div id="time-container">  
            <div>
                <hr></hr>
                <div className='time-item'>
                    <p>Lap {times.length}</p>
                    <p>{runningTime[0]}</p>
                </div>
                <hr></hr>
            </div>
            {tempTimes
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