import React, { FC } from "react";

export const commonChars = ["+", "-", "/", "*", "%"];

interface Props {
  setCurrentChar: (char: string) => void;
}

const CharsList: FC<Props> = ({ setCurrentChar }) => {
  const charsList = commonChars.map((char) => {
    return (
      <button
        onClick={() => setCurrentChar(char)}
        key={char}
        className="w-8 h-8 text-white bg-red-500"
      >
        {char}
      </button>
    );
  });

  return <>{charsList}</>;
};

export default CharsList;
