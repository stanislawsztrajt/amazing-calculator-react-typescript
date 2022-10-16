import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./App.css";
import { faSquareRootVariable, faSuperscript } from "@fortawesome/free-solid-svg-icons";
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

  return (
    <>
      <div className='background-main'></div>
      <main className="absolute z-50 flex flex-col items-center justify-center w-screen h-screen">
        <div className='h-20 p-4 mb-20 text-center w-80 max-w-screen-2xl'>
          {isInfinite(+result) ? (
            <div className='text-xl'>Nie można dzielić przez 0 <br /> lub liczba jest zbyt duża</div>
          ) : (
            <div>
              <div className='text-3xl'>
                &nbsp;{result}
              </div>
              <div className='text-xl text-gray-300'>
                {previousNumber} 
                &nbsp;
                {
                  currentChar === 'sqrt' ?
                    (
                      <FontAwesomeIcon icon={faSquareRootVariable}/>
                    )
                    : currentChar === 'pow' ?
                      (
                        <FontAwesomeIcon icon={faSuperscript}/>
                      ) : <>{currentChar}</>
                }
                &nbsp;?
              </div>
              <div className='mt-2 text-5xl'>
                {currentNumber || 0}
              </div>
            </div>
          )}
        </div>
        <section className='flex flex-col w-80'>
          <div className='flex flex-row gap-4'>
            <button className='clear-button' onClick={clear}>
              <div className='mt-1'>
                C
              </div>
            </button>
            <button className='functional-button' onClick={removeLastNumber}>
              <FontAwesomeIcon className='mt-1' icon={faDeleteLeft}/>
            </button>
            <button className='functional-button' onClick={() => setCurrentNumber("")}>
              <div className='mt-1'>
                CE
              </div>
            </button>
            <button className='result-button' onClick={() => calculateResult()}>
              <div className='mt-1'>
                =
              </div>
            </button>
          </div>
          
          <div className='flex flex-row mt-4'>
            <div className=''>
              <CustomCharsList setCurrentChar={setCurrentChar} />
              <NumbersList setCurrentNumberToNegativeOrPositive={setCurrentNumberToNegativeOrPositive} setCurrentNumber={setCurrentNumber} currentNumber={currentNumber} />
            </div>
            <CharsList setCurrentChar={setCurrentChar} />
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
