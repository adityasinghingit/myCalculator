import Display from "./components/Display";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Heading from "./components/Heading/";
import { useState } from "react";

function App() {

  let [calVal, setCalval] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalval("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalval(result);
    }else {
      const newDisplayValue = calVal + buttonText;
      setCalval(newDisplayValue);
    }
  };  

  return (

     <center>
      <Heading/>
       <div className={styles.calculator}>
      <Display displayValue = {calVal}></Display>
      <ButtonsContainer onButtonClick = {onButtonClick}></ButtonsContainer>
    </div>
     </center>
  
    
  )
}

export default App
