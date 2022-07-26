import {useState} from 'react';

function Progression4(){
    let [count,setCount] = useState(0)
    return <>
        <center>
            <h1>PROGRESSION 4</h1>
            <p>Count value is : {count}</p>
            <button onClick={()=>setCount(0)}>Reset</button>
            <button onClick={()=>setCount(prev=>prev+1)}>Plus (+)</button>
            <button onClick={()=>setCount(prev=>prev-1)}>Minus (-)</button>
        </center>
    </>
}

export default Progression4;