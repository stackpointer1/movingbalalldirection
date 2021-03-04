import React, {  useState,useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition,setBallPosition] = useState({
    left: "0px",
    top: "0px",
  });
  const reset = () => {
    setX(0);
    setY(0);
    setBallPosition({left:"0px",top:"0px"});
    setRenderBall(false);
    renderChoice();
    
  };
  const renderChoice = () => {
    if(renderBall)
    return(<div classname="ball" style={{position:"absolute",left:x, top:y}}></div>)
    else
      return(<button className="start" onClick={moveBall}>start</button>)
    
  };
  function moveBall()
  {
    setRenderBall(true);
    renderChoice();
  }
  const handListner=(event)=> {
    switch (event.keyCode) {
        case 39:
       setX(x=>x+5);
        break;
        case 40:
        console.log("down");
       setY(y=>y+5);
        break;
        case 37:
        console.log("left");
       setX(x=>x-5);
        break;
        case 38:
        console.log("up");
       setY(y=>y-5);
       break;
       default:
         break;
        }
};
useEffect(()=>{
  document.addEventListener("keydown", handListner);
  
  return function() {document.removeEventListener("keydown",handListner)};
},[]);



  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;

