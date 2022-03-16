import React from 'react';
import './index.css';
import Footer from './Footer';
import Buttons from './Buttons';
import data from "./helpers/data";
import { useState, useEffect } from 'react';
import randomInteger from './helpers/randomInteger';
import isWin from './helpers/isWin';
import fullscreen from './helpers/fullscreen';

function App() {
  const [message, setMessage] = useState('Play again');
  const [isFinished, setIsFinished] = useState(false);
  const [state, setState] = useState(data());
  const [isRobotStep, setIsRobotStep] = useState(false);
  const [messageClassName, setMessageClassName] = useState('disabled');

  if (isRobotStep) {

    if (isWin(state, 'X')) {
      setMessageClassName('win');
      setMessage('X wins. Play again?');
      setIsFinished(true);
    } else {

      const emptyCells = state.filter(item => !item.value);
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

      if (isWin(newState, 'O')) {
        setMessageClassName('loose');
        setMessage('O wins. Play again?');
        setIsFinished(true);
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
    setMessage('Play again');
    setMessageClassName('disabled');
    setIsFinished(false);
    setState(state.map(item => {
      return (
        { ...item, value: null }
      )
    }));
  }



}

export default App;
