import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App1() {
  const [message, setMessage] = useState('Play again');
  const [isFinished, setIsFinished] = useState(false);

  return (
    <div className="wrapper">
      <div className="header">
        <h1>Tic-tac-toe React game</h1>
      </div>
      <div id="btnfullscreen" onClick={fullscreen}>Fullscreen on/off</div>
      <div id="message" className="disabled" onClick={playAgain}>{message}</div>
        <div className="field">

        <button className="bar" onClick={play}></button>
        <button className="bar" onClick={play}></button>
        <button className="bar" onClick={play}></button>
        <button className="bar" onClick={play}></button>
        <button className="bar" onClick={play}></button>
        <button className="bar" onClick={play}></button>
        <button className="bar" onClick={play}></button>
        <button className="bar" onClick={play}></button>
        <button className="bar" onClick={play}></button>
      </div>
      <Footer />
    </div>
  );

  function play(event) {
    let buttons = document.querySelectorAll('button');
    let message = document.querySelector('#message');

    if (isFinished) return;

    if (event.target.innerHTML === '✖' || event.target.innerHTML === 'O'){
      alert('This place is already occupied. Try another one.');
      return;
    } else {
      event.target.innerHTML = '✖';
      event.target.classList.add('x');
      message.className ='';
    }

    if (
        (buttons[0].innerHTML === '✖' && buttons[1].innerHTML === '✖' && buttons[2].innerHTML === '✖') ||
        (buttons[3].innerHTML === '✖' && buttons[4].innerHTML === '✖' && buttons[5].innerHTML === '✖') ||
        (buttons[6].innerHTML === '✖' && buttons[7].innerHTML === '✖' && buttons[8].innerHTML === '✖') ||
        (buttons[0].innerHTML === '✖' && buttons[3].innerHTML === '✖' && buttons[6].innerHTML === '✖') ||
        (buttons[1].innerHTML === '✖' && buttons[4].innerHTML === '✖' && buttons[7].innerHTML === '✖') ||
        (buttons[2].innerHTML === '✖' && buttons[5].innerHTML === '✖' && buttons[8].innerHTML === '✖') ||
        (buttons[0].innerHTML === '✖' && buttons[4].innerHTML === '✖' && buttons[8].innerHTML === '✖') ||
        (buttons[2].innerHTML === '✖' && buttons[4].innerHTML === '✖' && buttons[6].innerHTML === '✖')
        ) {
      buttons.forEach(item => {
        item.classList.add('disabled');
      });
      message.className ='win';
      setMessage('✖ wins. Play again?');
      setIsFinished(true);
      return;
    }

      let emptyCells = Array.from(buttons).filter(item => item.innerHTML === '');
      let randomCell = randomInteger(0, emptyCells.length-1);
      console.log({randomCell}, emptyCells.length-1);

      if (emptyCells[randomCell]){
        emptyCells[randomCell].innerHTML = 'O';
        emptyCells[randomCell].classList.add('o');
      }

      if (
        (buttons[0].innerHTML === 'O' && buttons[1].innerHTML === 'O' && buttons[2].innerHTML === 'O') ||
        (buttons[3].innerHTML === 'O' && buttons[4].innerHTML === 'O' && buttons[5].innerHTML === 'O') ||
        (buttons[6].innerHTML === 'O' && buttons[7].innerHTML === 'O' && buttons[8].innerHTML === 'O') ||
        (buttons[0].innerHTML === 'O' && buttons[3].innerHTML === 'O' && buttons[6].innerHTML === 'O') ||
        (buttons[1].innerHTML === 'O' && buttons[4].innerHTML === 'O' && buttons[7].innerHTML === 'O') ||
        (buttons[2].innerHTML === 'O' && buttons[5].innerHTML === 'O' && buttons[8].innerHTML === 'O') ||
        (buttons[0].innerHTML === 'O' && buttons[4].innerHTML === 'O' && buttons[8].innerHTML === 'O') ||
        (buttons[2].innerHTML === 'O' && buttons[4].innerHTML === 'O' && buttons[6].innerHTML === 'O')
        ) {
        buttons.forEach(item => {
          item.classList.add('disabled');
        });
        message.className ='loose';
        setMessage('O wins. Play again?');
        setIsFinished(true);
        return;
      }

    function randomInteger(min, max) {
      let rand = min - 0.5 + Math.random() * (max - min + 1);
      return Math.round(rand);
    }

  }

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

function Footer() {
  return (
    <div className="footer">
      <p>This game developed in 2021 by <a href="https://github.com/iq-developer">Vladimir Sevastianov</a> at <a href="https://rs.school/js/"><img alt="RS School logo" src="https://rs.school/images/rs_school_js.svg" width="100" /></a></p>
    </div>
  );
}

ReactDOM.render(
  <App1 />,
  document.getElementById('root')
);
