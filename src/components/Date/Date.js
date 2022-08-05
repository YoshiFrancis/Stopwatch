import { useState } from 'react';
import './Date.css'

const CurrentDate = () => {

    const [time, setTime] = useState('')
    const [date, setDate] = useState('')
    let current = new Date();
    window.setInterval(() => {
        setTime(`${current.getHours() + 1}:${current.getMinutes()}`)
        setDate(`${current.getMonth() + 1}/${current.getDay()}/${current.getFullYear()}`)
    }, 1000)
    
    return (
        <div id="container">
            <p id="time">{time}</p>
            <p id="year">{date}</p>
        </div>
    )
}

export default CurrentDate