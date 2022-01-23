import React, {useEffect, useState} from 'react';
import style from './AnalogClock.module.css'

type timeType = {
    hours: number
    minutes: number
    seconds: number
}
const initialState = {
    hours: 0,
    minutes: 0,
    seconds: 0
}
export const AnalogClock = () => {
    const [time, setTime] = useState<timeType>(initialState)

    const deg = 6

    let day = new Date()

    time.hours = day.getHours() * 30
    time.minutes = day.getMinutes() * deg
    time.seconds = day.getSeconds() * deg

    const setTimeCB = () => {
        return {...time}
    }

    useEffect(() => {
        let intervalAnalogID = setInterval(() => {
            setTime(setTimeCB)
        }, 1000)
        return clearInterval(intervalAnalogID)
    }, [setTimeCB])

    return (
        <div className={`${style.clock}`}>
            <div className={style.hours}>
                <div style={{transform: 'rotateZ(${time.hours}deg)'}} className={style.hr} id='hr'/>
            </div>
            <div className={style.min}>
                <div style={{transform: 'rotateZ(${time.minutes}deg)'}} className={style.mn} id='mn'/>
            </div>
            <div className={style.sec}>
                <div style={{transform: 'rotateZ(${time.seconds}deg)'}} className={style.sc} id='sc'/>
            </div>
        </div>
    );
};

export default AnalogClock;