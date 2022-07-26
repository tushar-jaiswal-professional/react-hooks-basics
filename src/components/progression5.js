import {useState,useEffect} from 'react';

function Progression5(){
    let [age,setAge] = useState(0)
    let click = () => setAge(age+1)

    useEffect(()=>{
        document.title = "You are "+age+" years old!"
    })
    return <>
        <center>
            <h1>PROGRESSION 5</h1>
            <p>Look at the title of the current tab in your browser</p>
            <button onClick={click}>Update Title!</button>
        </center>
    </>
}

export default Progression5;