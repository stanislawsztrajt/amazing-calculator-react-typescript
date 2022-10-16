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
      <button key={char.value} onClick={() => setCurrentChar(char.value)} className="custom-chars">
        <div className="mt-1">
          {char.icon ? <FontAwesomeIcon icon={char.icon as IconProp} /> : <>{char.value}</>}
        </div>
      </button>
    );
  });

  return <div className="flex flex-row gap-4 mb-4">{charsList}</div>;
};

export default CustomCharsList;
