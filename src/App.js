import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import './App.css';
import Axios from "axios";
import { useEffect, useState } from 'react';

function App() {
  const [catFact, setCatFact] = useState("");

  const newFact = () => {
    Axios.get("https:/catfact.ninja/fact").then((res) => {
      console.log(res.data);
      setCatFact (res.data.fact);
    })
  }

  useEffect(() => {
    newFact();
  } , []);
  
  
  return (
    <div className="App">
    <button onClick={newFact} className='third'>Generate New</button>
    <h1  >{catFact}</h1>
    </div>
  );
}

export default App;
