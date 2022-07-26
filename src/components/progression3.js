import {useState} from 'react';

function Progression3(){

    let [state,setState] = useState({age:22,sib:3})
    let changeAge = (val) => {
        setState(prev=>{
            return {...prev,age:val}
        })
    }

    let changeSib = (val) => {
        setState(prev=>{
            return {...prev,sib: val}
        })
    }
    let age = state.age
    let sibnum = state.sib
    return <>
        <center>
        <h1>PROGRESSION 3</h1>
            <h1>Today I am {age} Years of Age</h1>
            <h1>I have {sibnum} siblings</h1>
            <button onClick={()=>changeAge(age+1)}>Get older!</button>
            <button onClick={()=>changeSib(sibnum+1)}>More Siblings!</button>
        </center>
    </>
}

export default Progression3;