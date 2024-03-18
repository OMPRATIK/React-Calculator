import { useState } from "react";

export default function App() {
  const [output, setOutput] = useState("");

  const isOperator = (num) => {
    if (["+", "-", "%", "/", "*", "."].includes(num)) return true;

    return false;
  };

  const validate = (val) => {
    if (output === "" && isOperator(val)) return false;

    if (isOperator(val) && isOperator(output.at(-1))) return false;

    if (output.length > 10) return false;
    return true;
  };

  const handleClickNum = (val) => {
    if (validate(val)) setOutput((out) => out + val);
  };

  const handleClickClearAll = () => {
    setOutput("");
  };

  const handleClickClearOne = () => {
    setOutput((out) => out.slice(0, -1));
  };

  const evaluate = () => {
    setOutput((out) => eval(out).toString());
  };

  return (
    <div className="app">
      <h2>{output}</h2>
      <Button onClick={handleClickClearAll} className={"spcl"}>
        AC
      </Button>
      <Button onClick={handleClickClearOne} className={"spcl"}>
        &larr;
      </Button>
      <Button onClick={() => handleClickNum("/")} className={"spcl"}>
        &divide;
      </Button>
      <Button onClick={() => handleClickNum("*")} className={"op"}>
        &times;
      </Button>

      <Button onClick={() => handleClickNum("7")}>7</Button>
      <Button onClick={() => handleClickNum("8")}>8</Button>
      <Button onClick={() => handleClickNum("9")}>9</Button>
      <Button onClick={() => handleClickNum("+")} className={"op"}>
        +
      </Button>

      <Button onClick={() => handleClickNum("4")}>4</Button>
      <Button onClick={() => handleClickNum("5")}>5</Button>
      <Button onClick={() => handleClickNum("6")}>6</Button>
      <Button onClick={() => handleClickNum("-")} className={"op"}>
        &minus;
      </Button>

      <Button onClick={() => handleClickNum("1")}>1</Button>
      <Button onClick={() => handleClickNum("2")}>2</Button>
      <Button onClick={() => handleClickNum("3")}>3</Button>
      <Button onClick={() => handleClickNum("%")} className={"op"}>
        %
      </Button>

      <Button onClick={() => handleClickNum("0")}>0</Button>
      <Button onClick={() => handleClickNum(".")}>.</Button>
      <Button className={"equals spcl"} onClick={evaluate}>
        =
      </Button>
    </div>
  );
}

function Button({ onClick, children, className }) {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
