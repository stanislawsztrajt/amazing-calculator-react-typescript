import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faSquareRootVariable, faSuperscript } from "@fortawesome/free-solid-svg-icons";

export const customChars = [
  {
    value: "n!",
  },
  {
    value: "pow",
    icon: faSuperscript,
  },
  {
    value: "sqrt",
    icon: faSquareRootVariable,
  },
];

interface Props {
  setCurrentChar: (char: string) => void;
}

const CustomCharsList: FC<Props> = ({ setCurrentChar }) => {
  const charsList = customChars.map((char) => {
    return (
      <button
        key={char.value}
        onClick={() => setCurrentChar(char.value)}
        className="w-8 h-8 text-white bg-red-500"
      >
        {char.icon ? <FontAwesomeIcon icon={char.icon as IconProp} /> : <>{char.value}</>}
      </button>
    );
  });

  return <>{charsList}</>;
};

export default CustomCharsList;
