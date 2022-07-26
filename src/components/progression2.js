import {useState} from 'react';

function Progression2(){
    let [age,setAge] = useState(22)
    let [sibage,setSibAge] = useState(3)

    let changeAge = () => {
        setAge(age=>age+=1)
    }

    let changeSibAge = () => {
        setSibAge(sibAge=>sibAge+=1)
    }

    return <>
        <center>
        <h1>PROGRESSION 2</h1>
            <h1>Today I am {age} Years of Age</h1>
            <h1>I have {sibage} siblings</h1>
            <button onClick={changeAge}>Get older!</button>
            <button onClick={changeSibAge}>More Siblings!</button>
        </center>
    </>
}

export default Progression2;