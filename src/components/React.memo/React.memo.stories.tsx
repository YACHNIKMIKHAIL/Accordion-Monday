import React, {useState} from "react";

export default {
    title: 'React.memo.demo'
}

const NewMessagesCounterSecret = (props: { count: number }) => {
    console.log('Counter rendering !')
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('Users rendering!')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}
const Users = React.memo(UsersSecret)
const NewMessagesCounter = React.memo(NewMessagesCounterSecret)

export const Example1 = () => {
    const [count, setCount] = useState<number>(0)
    const [users, setUsers] = useState<Array<string>>(['me', 'Vitalya', 'Igor'])

    const addUser = () => {
        setUsers([...users, 'Sveta ' + new Date().getTime()])
    }

    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={addUser}>add U</button>
        <NewMessagesCounter count={count}/>
        <Users users={users}/>
    </>

}