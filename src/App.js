import React from 'react';
import './index.css';
import Footer from './Footer';
import Buttons from './Buttons';
import data from "./helpers/data";
import { useState, useEffect } from 'react';
import randomInteger from './helpers/randomInteger'

function App() {
  const [message, setMessage] = useState('Play again');
  const [isFinished, setIsFinished] = useState(false);
  const [state, setState] = useState(data());
  const [isRobotStep, setIsRobotStep] = useState(false);

  if (isRobotStep) {
    console.log('isRobotStep: ', isRobotStep);
    const emptyCells = state.filter(item => !item.value);
    const randomCellNumber = randomInteger(0, emptyCells.length - 1);


    setState(state.map(item => {
      if (item.id === emptyCells[randomCellNumber].id) {
        return (
          { ...item, value: 'O' }
        )
      }
      return (
        { ...item }
      )
    }));

    setIsRobotStep(false);
  }

  return (
    <div className="wrapper">
      <div className="header">
        <h1>Tic-tac-toe React game</h1>
      </div>
      <div id="btnfullscreen" onClick={fullscreen}>Fullscreen on/off</div>
      <div id="message" className="disabled" onClick={playAgain}>{message}</div>
      <div className="field">
        <Buttons state={state} setState={setState} isRobotStep={isRobotStep} setIsRobotStep={setIsRobotStep} />
      </div>
      <Footer />
    </div>
  );













  function playAgain() {
    let buttons = document.querySelectorAll('button');
    buttons.forEach(item => {
      item.innerHTML = '';
      item.className = 'bar';
    });
    let message = document.querySelector('#message');
    message.className = 'disabled';
    setMessage('Play again');
    setIsFinished(false);
  }



  function fullscreen() {

    let elem = document.documentElement;
    if (!document.fullscreenElement && !document.mozFullScreenElement &&
      !document.webkitFullscreenElement && !document.msFullscreenElement) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }

}

export default App;
