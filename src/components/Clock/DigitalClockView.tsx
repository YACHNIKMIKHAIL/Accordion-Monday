import React from "react";
import {DigitalClockViewPropsType} from "./Clock";

export const DigitalClockView: React.FC<DigitalClockViewPropsType> = ({date}) => {
    const get2digitsString = (n: number) => n < 10 ? '0' + n : n

    return <>
        <span>{get2digitsString(date.getHours())}</span>
        <span>{get2digitsString(date.getMinutes())}</span>
        <span>{get2digitsString(date.getSeconds())}</span>
    </>
}