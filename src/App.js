import { useState } from "react";
import "./App.css"

function App() {
const [result,setResult]=useState("")

const clickhandler=(e)=>{
  setResult(result.concat( e.target.textContent))
}

const clearDisplay=()=>{
  setResult("");
}

const calculate=()=>{
  setResult(eval(result).toString())
}

const bothsigns = () => {
  if (result !== "") {
    const newValue = (parseFloat(result) * -1).toString();
    setResult(newValue);
  }
}

  return (
    <div className="calc">
     <input type="text" placeholder="0" id="Screen" value={result}/>
     <button className="buttonNumber" onClick={clearDisplay}>C</button>
     <button className="buttonNumber" onClick={bothsigns}>+/-</button>
     <button className="buttonNumber" onClick={clickhandler}>%</button>
     <button className="buttonSigns" onClick={clickhandler}>/</button>
     <button className="buttonNumber" onClick={clickhandler}>7</button>
     <button className="buttonNumber" onClick={clickhandler}>8</button>
     <button className="buttonNumber" onClick={clickhandler}>9</button>
     <button className="buttonSigns" onClick={clickhandler}>*</button>
     <button className="buttonNumber" onClick={clickhandler}>4</button>
     <button className="buttonNumber" onClick={clickhandler}>5</button>
     <button className="buttonNumber" onClick={clickhandler}>6</button>
     <button className="buttonSigns" onClick={clickhandler}>-</button>
     <button className="buttonNumber" onClick={clickhandler}>1</button>
     <button className="buttonNumber" onClick={clickhandler}>2</button>
     <button className="buttonNumber" onClick={clickhandler}>3</button>
     <button className="buttonSigns" onClick={clickhandler}>+</button>
     <button className="Zero" onClick={clickhandler}>0</button>
     <button className="buttonNumber" onClick={clickhandler}>.</button>
     <button className="buttonSigns" onClick={calculate}>=</button>
     
    </div>
  );
}

export default App;
