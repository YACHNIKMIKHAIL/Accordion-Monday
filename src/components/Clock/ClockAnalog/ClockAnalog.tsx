import style from './ClockAnalog.module.css'
import {useCallback, useEffect, useState} from "react";


type timeType = {
    hours: number
    minutes: number
    seconds: number
}

let initTime = {
    hours: 0,
    minutes: 0,
    seconds: 0,
}

export const ClockAnalog = () => {

    const [time, setTime] = useState<timeType>(initTime)

    const deg = 6;

    let day = new Date();

    time.hours = day.getHours() * 30
    time.minutes = day.getMinutes() * deg
    time.seconds = day.getSeconds() * deg

    const setAnalogTime = useCallback(() => {
        // return {...time}
        let time = {
            hours: new Date().getHours(),
            minutes: new Date().getMinutes(),
            seconds: new Date().getSeconds()
        }
        return {
            ...time
        }

    }, [])

    useEffect(() => {
        let intervalID = setInterval(() => {
            console.log('Analog tick')
            setTime(setAnalogTime)
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }
    }, [setAnalogTime])


    return (
        <div className={`${style.clock}`}>
            <div className={style.hour}>
                <div style={{transform:`rotateZ(${time.hours}deg)`}} className={`${style.hr} ${style.rotation}`} id="hr"/>
            </div>
            <div className={style.min}>
                <div style={{transform:`rotateZ(${time.minutes}deg)`}} className={`${style.mn} ${style.rotation}`} id="mn"/>
            </div>
            <div className={style.sec}>
                {/*<div className={`${style.sc} ${style.rotation}`} id="sc"/>*/}
                <div style={{transform:`rotateZ(${time.seconds}deg)`}} className={`${style.sc}`} id="sc"/>
            </div>
        </div>
    )

}