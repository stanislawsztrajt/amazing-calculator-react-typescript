import React from "react";
import "./App.css";
import { CharsList, CustomCharsList, NumbersList, useCalculator } from "./features/calculator";
import { isInfinite } from "./helpers";

const App: React.FC = () => {
  const {
    result,
    currentNumber,
    previousNumber,
    currentChar,

    setCurrentChar,
    setCurrentNumber,

    clear,
    removeLastNumber,
    calculateResult,
    setCurrentNumberToNegativeOrPositive,
  } = useCalculator();
  console.log(currentNumber.startsWith("-", 0));
  return (
    <main className="flex flex-col">
      <div>
        equal to:
        {isInfinite(+result) ? (
          <div>Nie można dzielić przez 0 lub liczba jest zbyt duża</div>
        ) : (
          <div>
            <div>{result}</div>
            <div>
              Current number
              {currentNumber}
            </div>
            <div>
              previous number
              {previousNumber}
            </div>
            <div>
              {currentChar}
              current char
            </div>
          </div>
        )}
      </div>
      <button onClick={removeLastNumber}>remove last number</button>
      <button onClick={() => setCurrentNumber("")}>clear current number</button>
      <button onClick={clear}>clear</button>
      <button onClick={calculateResult}>calculate result</button>
      {currentNumber.startsWith("-")}
      <button onClick={setCurrentNumberToNegativeOrPositive}>+ - number</button>
      <button onClick={() => setCurrentNumber(currentNumber + ".")}>, number</button>
      <CharsList setCurrentChar={setCurrentChar} />
      <CustomCharsList setCurrentChar={setCurrentChar} />
      <NumbersList setCurrentNumber={setCurrentNumber} currentNumber={currentNumber} />
    </main>
  );
};

export default App;
