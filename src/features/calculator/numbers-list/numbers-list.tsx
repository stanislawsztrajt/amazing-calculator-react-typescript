import { faPlusMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

interface Props {
  setCurrentNumber: React.Dispatch<React.SetStateAction<string>>;
  currentNumber: string;
  setCurrentNumberToNegativeOrPositive: () => void;
}

const NumbersList: FC<Props> = ({
  setCurrentNumber,
  currentNumber,
  setCurrentNumberToNegativeOrPositive,
}) => {
  const numbersList = numbers.map((number) => {
    return (
      <button
        onClick={() => setCurrentNumber(`${currentNumber}${number}`)}
        key={number}
        className="number-item"
      >
        <div className="mt-1">{number}</div>
      </button>
    );
  });

  return (
    <div className="grid grid-cols-3 gap-4">
      {numbersList}
      <button className="functional-button" onClick={setCurrentNumberToNegativeOrPositive}>
        <FontAwesomeIcon className="mt-1" icon={faPlusMinus} />
      </button>
      <button onClick={() => setCurrentNumber(`${currentNumber}0`)} className="number-item">
        <div className="mt-1">0</div>
      </button>
      <button className="functional-button" onClick={() => setCurrentNumber(currentNumber + ".")}>
        <div className="mt-1">,</div>
      </button>
    </div>
  );
};

export default NumbersList;
