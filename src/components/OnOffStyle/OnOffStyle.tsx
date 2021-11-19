import React, {useState} from "react";

type OnOffStyleType = {
    // on: boolean
}

export const OnOff = (props: OnOffStyleType) => {
    console.log('OnOffStyle rendered!')

    let [on, setOn] = useState(false);

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

    return (
        <div>
            <div style={onStyle} onClick={() => setOn(true)}>On</div>
            <div style={offStyle} onClick={() => setOn(false)}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}