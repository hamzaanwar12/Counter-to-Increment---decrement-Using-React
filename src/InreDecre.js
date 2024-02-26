import "./IncerDecre.css"
import Button from "./Button"
import { useState } from "react"

const InreDecre = ()=> {

  const [value, setVlaue] = useState(0);
  let increment = ()=>setVlaue(++value)
  let decrement = ()=>
  {
    if(value==0)
      alert("Counter Can't go to left Side of Number Line")  
    else if(value>=0)
      setVlaue(--value)
  }

  return (
    <div className="container">
      <h1>{value}</h1>
      <div className="buttons">
        <Button purpose={"ICREMENT" } click = {increment}/>
        <Button purpose={"DECREMENT"}click = {decrement} />
      </div>
    </div>
  );
}
export default InreDecre;
