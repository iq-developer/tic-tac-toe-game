import './index.css';
import Footer from './Footer';
import Buttons from './Buttons';
import data from "./helpers/data";
import { useState } from 'react';
import randomInteger from './helpers/randomInteger';
import checkWin from './helpers/checkWin';
import fullscreen from './helpers/fullscreen';
import { StateType } from './helpers/types';
import { MdFullscreen } from "react-icons/md";


const App = () => {
  const [message, setMessage]: [string, (message: string) => void] = useState('Play again');
  const [isStarted, setStarted]: [boolean, (isStarted: any) => void] = useState(false);
  const [isFinished, setIsFinished]: [boolean, (isFinished: any) => void] = useState(false); //TODO: change any to boolean
  const [state, setState]: [StateType, (state: StateType) => void] = useState(data());
  const [isRobotStep, setIsRobotStep]: [boolean, (isRobotStep: any) => void] = useState(false); //TODO: change any to boolean
  const [messageClassName, setMessageClassName]: [string, (messageClassName: string) => void] = useState('');

  if (isRobotStep) {

    const checkWinX: StateType = checkWin(state, '✖');

    if (checkWinX.length) {
      setState(checkWinX);
      setMessageClassName('win');
      setMessage('✖ wins. Play again?');
      setIsFinished(true);
    } else {

      const emptyCells: StateType = state.filter(item => !item.value);

      if (!emptyCells.length) {
        setMessageClassName('draw');
        setMessage('Draw - nobody wins. Play again?');
        setIsFinished(true);
      } else {

        const randomCellNumber: number = randomInteger(0, emptyCells.length - 1);

        const newState: StateType = (state.map(item => {
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

        const checkWinO: StateType = checkWin(newState, 'O');

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
      <div id="btnfullscreen" onClick={fullscreen}><MdFullscreen /> Fullscreen on/off</div>
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

  function playAgain(state: StateType): void {
    setState(checkWin(state, 'O'));
    setMessage('Play again');
    setMessageClassName('');
    setIsFinished(false);
    setState(data());
  }

}

export default App;
