import React, {useState} from "react";

type StarPropsType = {
    selected: boolean
}

export function SelfOffStar(props: StarPropsType) {
    console.log('Star rendering')
    let [state, setState] = useState(props.selected)

    const offStar=()=>{
        setState(!state)
    }

    if (state === true) {
        return <span> <b>Star </b>
            <button onClick={offStar}>x</button></span>;
    } else {
        return <span> Star
            <button onClick={offStar}>x</button></span>
    }

}




type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export function StarRating(props: RatingPropsType) {
    console.log('Rating rendering')
    return (
        <div>
            <SelfOffStar selected={props.value > 0}/>
            <SelfOffStar selected={props.value > 1}/>
            <SelfOffStar selected={props.value > 2}/>
            <SelfOffStar selected={props.value > 3}/>
            <SelfOffStar selected={props.value > 4}/>
        </div>
    );
}


