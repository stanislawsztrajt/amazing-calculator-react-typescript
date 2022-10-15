import { useEffect, useState } from "react";
import { factorialize } from "../../helpers";
import { customChars } from "./custom-chars-list/custom-chars-list";

const useCalculator = () => {
  const [currentNumber, setCurrentNumber] = useState<string>("");
  const [previousNumber, setPreviousNumber] = useState<string>("");
  const [currentChar, setChar] = useState<string>("");
  const [result, setResult] = useState<string>("");

  useEffect(() => {
    if (currentNumber === "") return;

    setPreviousNumber(currentNumber);
    setCurrentNumber("");
  }, [currentChar]);

  const clear = () => {
    setCurrentNumber("");
    setPreviousNumber("");
    setCurrentChar("");
    setResult("");
  };

  const setCurrentChar = (char: string) => {
    if (currentNumber === "" && previousNumber === "") {
      return;
    }

    if (char === currentChar) {
      return calculateResult();
    }

    if (char !== currentChar && currentNumber !== "" && previousNumber !== "") {
      calculateResult();
    }

    setChar(char);

    if (char === "n!" || char === "sqrt") {
      return calculateResult();
    }
  };

  const removeLastNumber = () => {
    setCurrentNumber(currentNumber.slice(0, -1));
  };

  const calculateResult = () => {
    setCurrentNumber("");

    if (currentChar === "" && previousNumber === "") {
      setPreviousNumber(currentNumber);
      setResult(currentNumber);
      return;
    }

    if (previousNumber === "") return;

    if (customChars.some((char) => char.value === currentChar)) {
      let calculatedValue = "";

      switch (currentChar) {
        case "n!":
          calculatedValue = factorialize(previousNumber !== "" ? +previousNumber : +currentNumber);
          break;
        case "pow":
          calculatedValue = String(Math.pow(+previousNumber, +currentNumber));
          break;
        case "sqrt":
          calculatedValue = String(
            Math.sqrt(previousNumber !== "" ? +previousNumber : +currentNumber)
          );
          break;
        default:
          alert("something went wrong");
      }

      setPreviousNumber(calculatedValue);
      setResult(calculatedValue);
      return;
    }

    const calculatedValue: string = eval(`${previousNumber} ${currentChar} ${currentNumber}`);
    setPreviousNumber(calculatedValue);
    setResult(calculatedValue);
  };

  return {
    result,
    currentNumber,
    previousNumber,
    currentChar,

    setCurrentNumber,
    setCurrentChar,

    clear,
    removeLastNumber,
    calculateResult,
  };
};
export default useCalculator;
