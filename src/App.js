import './App.css';
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom';
import Progression1 from './components/progression1';
import Progression2 from './components/progression2';
import Progression3 from './components/progression3';
import Progression4 from './components/progression4';
import Progression5 from './components/progression5';
import Progression6 from './components/progression6';

function Empty(){
  return <center><h1>Nothing to display</h1></center>
}

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <div className="nav">
          <Link to="/react-hooks-basics"><h3>Progression 1</h3></Link>
          <Link to="progression2"><h3>Progression 2</h3></Link>
          <Link to="progression3"><h3>Progression 3</h3></Link>
          <Link to="progression4"><h3>Progression 4</h3></Link>
          <Link to="progression5"><h3>Progression 5</h3></Link>
          <Link to="progression6"><h3>Progression 6</h3></Link>
        </div>

        <Routes>
          <Route path="/react-hooks-basics" element={<Progression1/>}/>
          <Route path="progression2" element={<Progression2/>}/>
          <Route path="progression3" element={<Progression3/>}/>
          <Route path="progression4" element={<Progression4/>}/>
          <Route path="progression5" element={<Progression5/>}/>
          <Route path="progression6" element={<Progression6/>}/>
          <Route path="*" element={<Empty/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
