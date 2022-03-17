import './index.css';
import Footer from './Footer';
import Buttons from './Buttons';
import data from "./helpers/data";
import { useState } from 'react';
import randomInteger from './helpers/randomInteger';
import checkWin from './helpers/checkWin';
import fullscreen from './helpers/fullscreen';

type StateObject = {
  id: number,
  value: string,
  marked: string,
};

type State = Array<StateObject>;

type CheckWin = Array<Array<number>>;

function App() {
  const [message, setMessage]: [string, Function] = useState('Play again');
  const [isFinished, setIsFinished]: [boolean, Function] = useState(false);
  const [state, setState]: [State, Function] = useState(data());
  const [isRobotStep, setIsRobotStep]: [boolean, Function] = useState(false);
  const [messageClassName, setMessageClassName]: [string, Function] = useState('');

  if (isRobotStep) {

    const checkWinX: CheckWin = checkWin(state, '✖');

    if (checkWinX.length) {
      setState(checkWinX);
      setMessageClassName('win');
      setMessage('✖ wins. Play again?');
      setIsFinished(true);
    } else {

      const emptyCells: State = state.filter(item => !item.value);

      if (!emptyCells.length) {
        setMessageClassName('loose');
        setMessage('Draw - nobody wins. Play again?');
        setIsFinished(true);
      } else {

        const randomCellNumber: number = randomInteger(0, emptyCells.length - 1);

        const newState: State = (state.map(item => {
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

        const checkWinO: CheckWin = checkWin(state, 'O');

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

  function playAgain(state: State): void {
    setState(checkWin(state, 'O'));
    setMessage('Play again');
    setMessageClassName('');
    setIsFinished(false);
    setState(data());
  }

}

export default App;
