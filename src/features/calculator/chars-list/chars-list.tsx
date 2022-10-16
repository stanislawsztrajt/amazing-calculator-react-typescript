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
        className="common-chars"
      >
        <div className='mt-1'>
          {char}
        </div>
      </button>
    );
  });

  return <div className='flex flex-col gap-4 ml-4'>{charsList}</div>;
};

export default CharsList;
