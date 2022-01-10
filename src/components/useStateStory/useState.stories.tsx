import React, {useState} from "react";

export default {
    title: 'useState.demo'
}

const generateN = () => {
    console.log('generateN work!')
    return 1845616953
}

export const Example1 = () => {
    console.log('Example1 render!')
    const [counter, setCounter] = useState<number>(generateN)
    // const changer = (state: number) => state + 1

    return <>
        <button onClick={() => setCounter((state: number) => state + 1)}>+</button>
        {counter}
    </>

}