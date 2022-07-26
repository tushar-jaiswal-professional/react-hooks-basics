import {useContext} from 'react';
import React from 'react';

function Progression6(){
    let ThemeContext = React.createContext('dark');
    let theme = useContext(ThemeContext);
    return <div
        style={{
            background:theme==='dark' ? 'black':'gray',
            color: theme === 'dark' ? 'white' : 'red',
            width: '100%',
            minHeight: '200px'
    }}
    ><h1>PROGRESSION 6</h1><br></br>The theme here is {theme}</div>
}

export default Progression6;