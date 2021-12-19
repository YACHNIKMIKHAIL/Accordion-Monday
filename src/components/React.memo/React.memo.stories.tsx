import {useState} from "react";

export default {
    title: 'React.memo.demo'
}

const NewMessagesCounter=(props: { count:number })=>{
    return <div>{props.count}</div>
}

const Users=(props: { users:Array<string> })=>{
    return <div>{props.users.map((u,i)=><div key={i}>{u}</div>)}</div>
}

export const Example1=()=>{
    const[count,setCount]=useState<number>(0)
    const[users,setUsers]=useState<Array<string>>(['me','Vitalya','Igor'])

    return <>
        <NewMessagesCounter count={count}/>
        <Users users={users}/>
    </>

}