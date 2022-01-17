import {useEffect, useState} from "react";
import {ClockAnalog} from "./ClockAnalog/ClockAnalog";


export const Clock = () => {
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

    return (

        <div>
            <button onClick={changeTypeTime}>Analog || Digital</button>

            {type ? <div>{time}</div> : <ClockAnalog/>}
        </div>
    )
}




