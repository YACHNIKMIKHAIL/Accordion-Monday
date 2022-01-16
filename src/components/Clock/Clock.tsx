import React, {useEffect, useState} from 'react';

type ClockPropsType = {}

function getTwoDigitsString(time: number) {
    return time < 10
        ? '0' + time
        : time
}

export const Clock: React.FC<ClockPropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            console.log('tick inrerval')
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }
    }, [])

    return (
        <div>
            <span>{getTwoDigitsString(date.getHours())}</span>
            :
            <span>{getTwoDigitsString(date.getMinutes())}</span>
            :
            <span>{getTwoDigitsString(date.getSeconds())}</span>
        </div>
    );
};

