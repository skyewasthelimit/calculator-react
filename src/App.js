import './index.css';
import React, { useState, useEffect } from 'react';

function App() {
  // Use state to manage the calculation value
  const [calculation, setCalculation] = useState(localStorage.getItem('calculation') || '');

  // Display the calculation on initial render and whenever the calculation state changes
  useEffect(() => {
    displayCalculation();
  }, [calculation]);

  // Update the calculation value and store it in localStorage
  const updateCalculation = (value) => {
    const newCalculation = calculation + value;
    setCalculation(newCalculation);
    localStorage.setItem('calculation', newCalculation);
  };

  // Display the calculation value in the component
  const displayCalculation = () => {
    const calculationElement = document.querySelector('.js-calculation');
    if (calculationElement) {
      calculationElement.innerHTML = calculation;
    }
  };

  return (
    <div className="App">
      <div className="display">
        <p className="js-calculation calculation"></p>
      </div>
      <p>
        <button className="number-button" onClick={() => updateCalculation('1')}>1</button>
        <button className="number-button" onClick={() => updateCalculation('2')}>2</button>
        <button className="number-button" onClick={() => updateCalculation('3')}>3</button>
        <button className="math-button" onClick={() => updateCalculation(' + ')}>+</button>
      </p>

      <p>
        <button className="number-button" onClick={() => updateCalculation('4')}>4</button>
        <button className="number-button" onClick={() => updateCalculation('5')}>5</button>
        <button className="number-button" onClick={() => updateCalculation('6')}>6</button>
        <button className="math-button" onClick={() => updateCalculation(' - ')}>-</button>
      </p>

      <p>
        <button className="number-button" onClick={() => updateCalculation('7')}>7</button>
        <button className="number-button" onClick={() => updateCalculation('8')}>8</button>
        <button className="number-button" onClick={() => updateCalculation('9')}>9</button>
        <button className="math-button" onClick={() => updateCalculation(' * ')}>*</button>
      </p>

      <p>
        <button className="number-button" onClick={() => updateCalculation('0')}>0</button>
        <button className="number-button" onClick={() => updateCalculation('.')}>.</button>
        <button className="equal-button" onClick={() => {
          setCalculation(eval(calculation).toString());
        }}>=</button>
        <button className="math-button" onClick={() => updateCalculation(' / ')}>/</button>
      </p>

      <p>
        <button className="equal-button" onClick={() => {
          setCalculation('');
          localStorage.setItem('calculation', '');
          console.log('cleared');
        }}>Clear</button>
      </p>
    </div>
  );
}

export default App;
