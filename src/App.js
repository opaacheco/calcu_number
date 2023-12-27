import { Container, Content, Row, Column } from "./styles";

import Input from "./components/input/index";
import Button from "./components/Button/index";

import { useState } from "react";

const App = () => {
  const [currentInput, setCurrentInput] = useState("0");
  //  const [firstNumber, setFirstNumer] = useState("0");
  //  const [operation, setOperation] = useState("");

  const handleClear = () => {
    setCurrentInput("0");
    //setOperation("");
  };

  const handleAddInput = (number) => {
    if (number === "=") {
      setCurrentInput(eval(currentInput));
    } else {
      setCurrentInput((prev) => `${prev == "0" ? " " : prev}${number}`);
    }
  };

  /*
  const handleSumNumbers = () => {
    console.log(operation);
    if (firstNumber == "0") {
      setFirstNumer(String(currentNumber));
      setCurrentNumber("0");
      setOperation("+");
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  const handleSubNumbers = () => {
    if (firstNumber == "0") {
      setFirstNumer(String(currentNumber));
      setCurrentNumber("0");
      setOperation("-");
    } else {
      const sub = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sub));
      setOperation("");
    }
  };

  const handleMultiNumbers = () => {
    if (firstNumber == "0") {
      setFirstNumer(String(currentNumber));
      setCurrentNumber("0");
      setOperation("x");
    } else {
      const multi = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multi));
      setOperation("");
    }
  };

  const handleDivNumbers = () => {
    if (firstNumber == "0") {
      setFirstNumer(String(currentNumber));
      setCurrentNumber("0");
      setOperation("/");
    } else {
      const div = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(div));
      setOperation("");
    }
  };

  const handleEquals = () => {
    if (firstNumber != "0" && operation != "" && currentNumber != "0") {
      switch (operation) {
        case "+":
          handleSumNumbers();
          break;
        case "-":
          handleSubNumbers();
          break;
        case "x":
          handleMultiNumbers();
          break;
        case "/":
          handleDivNumbers();
          break;
        default:
          break;
      }
    }
  };
*/
  return (
    <Container>
      <Content>
        <Input value={currentInput} />
        <Row>
          <Button lable="x" onClick={() => handleAddInput("*")} />
          <Button lable="/" onClick={() => handleAddInput("/")} />
          <Button lable="c" onClick={handleClear} />
          <Button lable="c" onClick={handleClear} />
        </Row>
        <Row>
          <Button lable="1" onClick={() => handleAddInput("1")} />
          <Button lable="2" onClick={() => handleAddInput("2")} />
          <Button lable="3" onClick={() => handleAddInput("3")} />
          <Button lable="+" onClick={() => handleAddInput("+")} />
        </Row>
        <Row>
          <Button lable="4" onClick={() => handleAddInput("4")} />
          <Button lable="5" onClick={() => handleAddInput("5")} />
          <Button lable="6" onClick={() => handleAddInput("6")} />
          <Button lable="-" onClick={() => handleAddInput("-")} />
        </Row>
        <Row>
          <Button lable="7" onClick={() => handleAddInput("7")} />
          <Button lable="8" onClick={() => handleAddInput("8")} />
          <Button lable="9" onClick={() => handleAddInput("9")} />
          <Button lable="=" onClick={() => handleAddInput("=")} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
