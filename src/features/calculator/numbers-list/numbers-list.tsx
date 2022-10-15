import React, { FC } from "react";

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

interface Props {
  setCurrentNumber: React.Dispatch<React.SetStateAction<string>>;
  currentNumber: string;
}

const NumbersList: FC<Props> = ({ setCurrentNumber, currentNumber }) => {
  const numbersList = numbers.map((number) => {
    return (
      <button
        onClick={() => setCurrentNumber(`${currentNumber}${number}`)}
        key={number}
        className="w-8 h-8 text-white bg-red-500"
      >
        {number}
      </button>
    );
  });

  return <>{numbersList}</>;
};

export default NumbersList;
