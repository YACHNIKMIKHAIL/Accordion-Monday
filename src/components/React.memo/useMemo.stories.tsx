import React, {useState} from 'react';


export default {
    title: 'useMemo'
}

export const Ex1 = () => {
    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)

    return <>
        <input value={a} onChange={(e) => setA(e.currentTarget.valueAsNumber)}/>
        <input value={b} onChange={(e) => setB(e.currentTarget.valueAsNumber)}/>
    </>
};

