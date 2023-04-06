import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState(0);

  function handleNum1Change(e) {
    setNum1(Number(e.target.value));
  }

  function handleNum2Change(e) {
    setNum2(Number(e.target.value));
  }

  function handleOperatorChange(e) {
    setOperator(e.target.value);
  }

  function handleCalculate() {
    let result;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        result = 0;
    }
    setResult(result);
  }

  return (
    <div>
      <h1>Arithmetic Calculator</h1>
      <div>
        <input type="number" value={num1} onChange={handleNum1Change} />
        <select value={operator} onChange={handleOperatorChange}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input type="number" value={num2} onChange={handleNum2Change} />
        <button onClick={handleCalculate}>=</button>
        <span>{result}</span>
      </div>
    </div>
  );
}

export default Calculator;

