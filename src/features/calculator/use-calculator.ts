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
    if (currentNumber !== "" && previousNumber !== "") {
      return setCurrentNumber("");
    }

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

    if (char === 'n!' || char === 'sqrt') {
      calculateResult(char);
    }

    if (char === currentChar) {
      return calculateResult();
    }

    if (char !== currentChar && currentNumber !== "" && previousNumber !== "") {
      calculateResult();
    }

    setChar(char);
  };

  const setCurrentNumberToNegativeOrPositive = () => {
    setCurrentNumber(
      currentNumber[0] === "-" ? currentNumber.replace("-", "") : "-" + currentNumber
    );
  };

  const removeLastNumber = () => {
    setCurrentNumber(currentNumber.slice(0, -1));
  };

  const calculateResult: (customChar?: string) => unknown = (customChar) => {
    setCurrentNumber("");

    if (currentChar === "" && customChar === '' && previousNumber === "") {
      setPreviousNumber(currentNumber);
      setResult(currentNumber);
      return;
    }

    if (customChars.some((char) => char.value === customChar)) {
      let calculatedValue = "";

      switch (customChar) {
        case "n!":
          calculatedValue = factorialize(previousNumber !== "" ? +previousNumber : +currentNumber || 0);
          break;
        case "pow":
          calculatedValue = String(Math.pow(+previousNumber, +currentNumber || 0));
          break;
        case "sqrt":
          calculatedValue = String(
            Math.sqrt(previousNumber !== "" ? +previousNumber : +currentNumber || 0)
          );
          break;
        default:
          alert("something went wrong");
      }

      setPreviousNumber(calculatedValue);
      setResult(calculatedValue);
      return;
    }

    const calculatedValue: string = eval(`${previousNumber} ${currentChar} ${currentNumber || 0}`);
    setPreviousNumber(String(calculatedValue));
    setResult(String(calculatedValue));
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
    setCurrentNumberToNegativeOrPositive,
  };
};
export default useCalculator;
