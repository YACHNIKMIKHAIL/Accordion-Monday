import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect.demo'
}

export const SimpleExample = () => {
    console.log('SimpleExample render!')
    const [fake, setFake] = useState<number>(100)
    const [counter, setCounter] = useState<number>(1)

    useEffect(() => {
        console.log('Side Effect POW-POW!!!')
        document.title = counter.toString()
        //api.getUsers.then('')
        //setInterval
        //indexedDB
        //document.getElementById
        //document.title='bla-bla'
    }, [counter])

    //Выучить!!!
    useEffect(() => {
        console.log('useEffect EVERY RENDER!!!')
        document.title = counter.toString()
    })
    useEffect(() => {
        console.log('useEffect ONLY FIRST RENDER!!!')
        document.title = counter.toString()
    }, [])
    useEffect(() => {
        console.log('useEffect ONLY FIRST RENDER & EVERY COUNTER CHANGE!!!')
        document.title = counter.toString()
    }, [counter])


    return <>
        Hello, {counter} {fake}
        <button onClick={() => setCounter(counter + 1)}>counter +</button>
        <button onClick={() => setFake(fake + 1)}>fake +</button>
    </>

}