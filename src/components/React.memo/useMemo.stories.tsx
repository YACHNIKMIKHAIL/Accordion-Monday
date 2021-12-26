import React, {useMemo, useState} from 'react';


export default {
    title: 'useMemo'
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = useMemo(() => {

            let tempResA = 1
            for (let i = 1; i <= a; i++) {
                let fake = 0
                while (fake < 100000000) {
                    fake++
                    const fakeValue = Math.random()
                }
                tempResA *= i
            }
            return tempResA
        }, [a]
    )
    let resultB = 1

    for (let i = 1; i <= a; i++) {
        let fake = 0
        while (fake < 100000000) {
            fake++
            const fakeValue = Math.random()
        }
        resultA *= i
    }
    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
};

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('Users secret rendering!')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}
const Users = React.memo(UsersSecret)


export const HelpsForReactMemoExample = () => {
    console.log('HelpsForReactMemoExample')
    const [count, setCount] = useState<number>(0)
    const [users, setUsers] = useState<Array<string>>(['me', 'Vitalya', 'Igor'])

    const newArray = useMemo(() => {
        const newArray = users.filter(u => u.toLowerCase().indexOf('a') > -1)
        return newArray
    }, [users])

    const addUser = () => {
        setUsers([...users, 'Sveta ' + new Date().getTime()])
    }

    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => addUser()}>add u</button>
        {count}
        <Users users={newArray}/>
    </>

}