import React, {useEffect, useState} from "react";

export default {
    title: 'TimeExample.demo'
}

export const TimeExample = () => {
    console.log('TimeExample render!')
    // const [hours, setHours] = useState<number>(0)
    // const [minutes, setMinutes] = useState<number>(0)
    // const [seconds, setSeconds] = useState<number>(0)
    const [result, setResult] = useState<any>({hours:0, minutes:0, seconds:0})

    useEffect(() => {
            // setInterval(() => {
            //     console.log('tick' + seconds + 'minutes' + minutes + 'hours' + hours)
            //     // setCounter(counter+1)
            //     setCounter(counter => counter + 1)
            // }, 1000)

            let hours = 0
            let minutes = 0
            let seconds = 0

            setInterval(() => {
                console.log('seconds' + seconds + 'minutes' + minutes + 'hours' + hours)
                // setCounter(counter+1)

                if (seconds < 5) {
                    debugger
                    seconds = seconds + 1
                }
                if (seconds >= 5) {
                    debugger
                    minutes = minutes + 1
                    seconds = 0
                }
                if (minutes >= 2) {
                    debugger
                    hours = hours + 1
                    minutes = 0
                    seconds = 0
                }

                setResult({hours:hours, minutes:minutes, seconds:seconds})

            }, 1000)
        }
        , []
    )


    return <>
        hours:{result.hours} -minutes:{result.minutes} -seconds:{result.seconds}
        {/*<button onClick={()=>{}}>start</button>*/}
    </>

}