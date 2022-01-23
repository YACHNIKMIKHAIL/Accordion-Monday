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

export const SetTimeoutExample = () => {
    console.log('SetTimeoutExample render!')
    const [fake, setFake] = useState<number>(100)
    const [counter, setCounter] = useState<number>(1)

    // useEffect(() => {
    //     // setTimeout(()=>{
    //     //     document.title="bla=bla=bla"
    //     //     console.log('Title changed')
    //     // },2000)
    //
    //     setInterval(() => {
    //         console.log('tick' + counter)
    //         // setCounter(counter+1)
    //         setCounter(counter => counter + 1)
    //     }, 1000)
    // }, [])


    return <>
        Hello, counter:{counter} -fake:{fake}
        {/*<button onClick={() => setCounter(counter + 1)}>counter +</button>*/}
        {/*<button onClick={() => setFake(fake + 1)}>fake +</button>*/}
    </>

}

export const ResetEffectExample = () => {
    console.log('ResetEffectExample render!')
    const [counter, setCounter] = useState<number>(0)

    useEffect(() => {
        console.log('Effect occurred')
        return () => {
            console.log('RESET EFFECT!!!')
        }
    }, [])
    return <>
        hello counter: {counter}
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
    </>
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState<string>("")
    console.log('KeysTrackerExample render with ' + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(state => state + e.key)
        }

        window.addEventListener('keypress', handler)
        console.log('Effect occurred')

        return () => {
            window.removeEventListener('keypress', handler)
            console.log('Effect removed !')
        }
    }, [])
    return <>
        Typed text Typed text: {text}

    </>
}