 import "./App.css" 
import { useState } from "react";

function App() {

  let [value, setVlaue] = useState(0);
  let increment = ()=>setVlaue(++value)
  let decrement = ()=>
  {
    if(value===0)
      alert("Counter Can't go to left Side of Number Line")  
    else if(value>=0)
      setVlaue(--value)
  }


  return (
    <div className="container">
      <h1>{value}</h1>
      <div className="buttons">
        <button onClick={increment}>INCREMENT</button>
        <button onClick={decrement}>DECREMENT</button>
      </div>
    </div>
    // <InreDecre/>
  );
}

export default App;
