import React, {useState} from "react";

type UncontrolledOnOffType = {
    onChange: (on: boolean) => void
}

export const UncontrolledOnOff = (props: UncontrolledOnOffType) => {
    console.log('OnOffStyle rendered!')

    let [on, setOn] = useState(true);

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px black solid',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px black solid',
        display: 'inline-block',
        padding: '2px',
        marginLeft: '2px',
        backgroundColor: on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px black solid',
        display: 'inline-block',
        marginLeft: '2px',
        backgroundColor: on ? 'green' : 'red'
    }
    const OnClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const OffClicked = () => {
        setOn(false)
        props.onChange(false)
    }
    return (
        <div>
            <div style={onStyle} onClick={OnClicked}>On
            </div>
            <div style={offStyle} onClick={OffClicked}>Off
            </div>
            <div style={indicatorStyle}></div>
            UncontrolledOnOff
        </div>
    )
}