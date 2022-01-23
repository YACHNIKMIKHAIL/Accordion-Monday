import React, {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

type ClockPropsType = {
    mode: 'digital' | 'analog'
}
export const Clock = ({mode}: ClockPropsType) => {
    const [time, setTime] = useState<string>("time")
    const [type, setType] = useState<boolean>(false)




    const changeTime = () => {
        return new Date().toLocaleTimeString()
    }



    useEffect(() => {
        console.log('useEffect')

        let interval = setInterval(() => {
            console.log('setInterval_digital')
            setTime(changeTime)
        }, 1000)

        return () => {
            clearInterval(interval)
        }

    }, [])


    const changeTypeTime = () => {
        setType(!type)
    }
    let view
    switch (mode) {
        case "analog":
            view = <AnalogClockView date={date}/>
            break
        case "digital":
        default:
            <DigitalClockView date={date}/>

            view = <div>{time}</div>
    }
    return (

        <div>{view}</div>
    )
}

export type DigitalClockViewPropsType = {
    date: Date
}

