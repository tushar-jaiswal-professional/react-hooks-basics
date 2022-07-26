import {useState} from 'react';

function Progression1(){
    let [age,setAge] = useState(22)

    let changeAge = () => {
        setAge(age=>age+=1)
    }

    return <>
        <center>
            <h1>PROGRESSION 1</h1>
            <h1>Today I am {age} Years of Age</h1>
            <button onClick={changeAge}>Get older!</button>
        </center>
    </>
}

export default Progression1;