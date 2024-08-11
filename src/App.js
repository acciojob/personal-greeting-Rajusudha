import {useState} from 'react';
import './App.css';

function App() {
  // jfik/
  const[name,setname]=useState('');
  return (
    <div >
      <label For="name">Enter your name:</label>
      <br/>
      <input type="text" id='name' value={name} onChange={(e)=>setname(e.target.value)} />
      {name && <p>Hello, {name}!</p>}
     
    </div>
  );
}

export default App;
