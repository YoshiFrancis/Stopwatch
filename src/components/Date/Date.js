import { useState } from 'react';
import './Date.css'




const CurrentDate = () => {


    const [time, setTime] = useState('')
    const [date, setDate] = useState('')
    let current = new Date();

    const checkLength = (number) => {
        number = String(number)
        if (number.length < 2) {
            number = '0' + number
        }
        return number
    }


    window.setInterval(() => {
        let hour = checkLength(current.getHours() + 1)
        let minutes = checkLength(current.getMinutes())
        let day = checkLength(current.getDay())
        let month = checkLength(current.getMonth() + 1)
        setTime(prevTime => `${hour}:${minutes}`)
        setDate(prevDate => `${month}/${day}/${current.getFullYear()}`)
    }, 1000)
    return (
        <div id="container">
            <p id="time">{time}</p>
            <p id="year">{date}</p>
        </div>
    )
}

export default CurrentDate