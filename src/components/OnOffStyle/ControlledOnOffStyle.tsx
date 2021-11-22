import React, {useState} from "react";

export type OnOffValueType = boolean
type ControlledOnOffType = {
    on: boolean
    change: (value: boolean) => void
}

export const ControlledOnOff = (props: ControlledOnOffType) => {
    console.log('OnOffStyle rendered!')

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px black solid',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px black solid',
        display: 'inline-block',
        padding: '2px',
        marginLeft: '2px',
        backgroundColor: props.on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px black solid',
        display: 'inline-block',
        marginLeft: '2px',
        backgroundColor: props.on ? 'green' : 'red'
    }

    return (
        <div>
            <div style={onStyle} onClick={() => props.change(true)}>On</div>
            <div style={offStyle} onClick={() => props.change(false)}>Off</div>
            <div style={indicatorStyle}></div>
            ControlledOnOff
        </div>
    )
}