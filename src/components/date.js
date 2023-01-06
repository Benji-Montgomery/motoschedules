import  React, { useState , useEffect } from 'react'
import './css/date.css'

export const DateTime = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
            <span className='dateContainer'>
                <span className='date'>{date.toLocaleDateString()}</span>
                <span className='time'>{date.toLocaleTimeString()}</span>
            </span>
    )
}

export default DateTime