import { useState } from "react";

export default function Task13() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [result, setResult] = useState("");

  function calculate(operator) {
    const a = Number(firstNumber);
    const b = Number(secondNumber);

    if (firstNumber === "" || secondNumber === "") {
      setResult("Enter both numbers");
      return;
    }

    if (operator === "+") setResult(a + b);
    if (operator === "-") setResult(a - b);
    if (operator === "*") setResult(a * b);
    if (operator === "/") {
      setResult(b === 0 ? "Cannot divide by zero" : a / b);
    }
  }

  return (
    <main>
      <h2>Simple Calculator</h2>

      <input
        type="number"
        value={firstNumber}
        onChange={(event) => setFirstNumber(event.target.value)}
        placeholder="First number"
      />

      <input
        type="number"
        value={secondNumber}
        onChange={(event) => setSecondNumber(event.target.value)}
        placeholder="Second number"
      />

      <div>
        <button onClick={() => calculate("+")}>+</button>
        <button onClick={() => calculate("-")}>−</button>
        <button onClick={() => calculate("*")}>×</button>
        <button onClick={() => calculate("/")}>÷</button>
      </div>

      <p>Result: {result}</p>
    </main>
  );
}