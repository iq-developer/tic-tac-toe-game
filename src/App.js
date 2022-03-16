import React from 'react';
import './index.css';
import Footer from './Footer';
import Buttons from './Buttons';
import data from "./helpers/data";
import { useState } from 'react';
import randomInteger from './helpers/randomInteger';
import checkWin from './helpers/checkWin';
import fullscreen from './helpers/fullscreen';

function App() {
  const [message, setMessage] = useState('Play again');
  const [isFinished, setIsFinished] = useState(false);
  const [state, setState] = useState(data());
  const [isRobotStep, setIsRobotStep] = useState(false);
  const [messageClassName, setMessageClassName] = useState('');

  if (isRobotStep) {

    const checkWinX = checkWin(state, '✖');

    if (checkWinX.length) {
      setState(checkWinX);
      setMessageClassName('win');
      setMessage('✖ wins. Play again?');
      setIsFinished(true);
    } else {

      const emptyCells = state.filter(item => !item.value);

      if (!emptyCells.length) {
        setMessageClassName('loose');
        setMessage('Draw - nobody wins. Play again?');
        setIsFinished(true);
      } else {

        const randomCellNumber = randomInteger(0, emptyCells.length - 1);

        const newState = (state.map(item => {
          if (item.id === emptyCells[randomCellNumber].id) {
            return (
              { ...item, value: 'O' }
            )
          }
          return (
            { ...item }
          )
        }));

        setState(newState);

        const checkWinO = checkWin(state, 'O');

        if (checkWinO.length) {
          setState(checkWinO);
          setMessageClassName('loose');
          setMessage('O wins. Play again?');
          setIsFinished(true);
        }
      }

    }
    setIsRobotStep(false);
  }


  return (
    <div className="wrapper">
      <div className="header">
        <h1>Tic-tac-toe React game</h1>
      </div>
      <div id="btnfullscreen" onClick={fullscreen}>Fullscreen on/off</div>
      <div id="message" className={messageClassName} onClick={() => playAgain(state)}>{message}</div>
      <div className="field">
        <Buttons
          state={state}
          setState={setState}
          isRobotStep={isRobotStep}
          setIsRobotStep={setIsRobotStep}
          isFinished={isFinished}
        />
      </div>
      <Footer />
    </div>
  );

  function playAgain(state) {
    setState(checkWin(state, 'O'));
    setMessage('Play again');
    setMessageClassName('');
    setIsFinished(false);
    setState(data());
  }

}

export default App;
