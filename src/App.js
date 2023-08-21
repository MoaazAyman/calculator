import { children, useState } from "react";
import "./index";

export default function App() {
  const [input, setInput] = useState("");
  const [outPut, setOutput] = useState("");

  function handleClick(e) {
    let clickedNum = e.target.textContent;
    let newInput = input;
    let newOutput = outPut;

    if (clickedNum === "AC") {
      newInput = "";
      newOutput = "";
    } else if (clickedNum === "=") {
      try {
        newOutput = eval(input);
      } catch (error) {
        newOutput = "Error finding the output";
      }
    } else {
      newInput = input + clickedNum;
    }
    setInput(newInput);
    setOutput(newOutput);
  }
  return (
    <div className="app">
      <Screen input={input} outPut={outPut} />
      <div className="contaier">
        <Button handleClick={handleClick}>
          <p>(</p>
        </Button>
        <Button handleClick={handleClick}>
          <p>)</p>
        </Button>
        <Button handleClick={handleClick}>
          <p>%</p>
        </Button>
        <Button handleClick={handleClick}>
          <p>AC</p>
        </Button>
        <br></br>
        <Button handleClick={handleClick}>
          <p>7</p>
        </Button>
        <Button handleClick={handleClick}>
          <p>8</p>
        </Button>
        <Button handleClick={handleClick}>
          <p>9</p>
        </Button>
        <Button handleClick={handleClick}>
          <p>/</p>
        </Button>
        <br></br>
        <Button handleClick={handleClick}>
          <p>4</p>
        </Button>
        <Button handleClick={handleClick}>
          <p>5</p>
        </Button>
        <Button handleClick={handleClick}>
          <p>6</p>
        </Button>
        <Button handleClick={handleClick}>
          <p>*</p>
        </Button>
        <br></br>
        <Button handleClick={handleClick}>
          <p>1</p>
        </Button>
        <Button handleClick={handleClick}>
          <p>2</p>
        </Button>
        <Button handleClick={handleClick}>
          <p>3</p>
        </Button>
        <Button handleClick={handleClick}>
          <p>-</p>
        </Button>
        <br></br>
        <Button handleClick={handleClick}>
          <p>0</p>
        </Button>
        <Button handleClick={handleClick}>
          <p>.</p>
        </Button>
        <Button handleClick={handleClick}>
          <p>=</p>
        </Button>
        <Button handleClick={handleClick}>
          <p>+</p>
        </Button>
      </div>
    </div>
  );
}

function Screen({ input, outPut }) {
  return (
    <div className="screen">
      <p className="input">{input}</p>
      <p className="output">{outPut}</p>
    </div>
  );
}

function Button({ children, handleClick }) {
  return <button onClick={handleClick}>{children}</button>;
}
