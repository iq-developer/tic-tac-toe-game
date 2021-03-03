import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  constructor() {
		super();
		this.state = {finish: false, message: 'Play again'};
	}

  play(event) {
    let buttons = document.querySelectorAll('button');
    let message = document.querySelector('#message');

    if (this.state.finish) return;

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
      this.setState({message: '✖ wins. Play again?'});
      this.setState({finish: true});
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
        this.setState({message: 'O wins. Play again?'});
        this.setState({finish: true});
        return;
      }
    

    function randomInteger(min, max) {
      let rand = min - 0.5 + Math.random() * (max - min + 1);
      return Math.round(rand);
    }

  }

  playAgain() {
    let buttons = document.querySelectorAll('button');
    buttons.forEach(item => {
      item.innerHTML = '';
      item.className = 'bar';
    });
    let message = document.querySelector('#message');
    message.className = 'disabled';
    this.setState({message: 'Play again'});
    this.setState({finish: false});
  }

  fullscreen(elem) {
    elem = elem || document.documentElement;
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
  

  render() {
    return (
    <div className="wrapper">
      <div className="header">
        <h1>Tic-tac-toe game</h1> 
      </div>
      <div id="btnfullscreen" onClick={this.fullscreen.bind(this, document.documentElement)}>Fullscreen on/off</div>
      <div id="message" className="disabled" onClick={this.playAgain.bind(this)}>{this.state.message}</div>
         <div className="field">
        <button className="bar" onClick={this.play.bind(this)}></button>
        <button className="bar" onClick={this.play.bind(this)}></button>
        <button className="bar" onClick={this.play.bind(this)}></button>
        <button className="bar" onClick={this.play.bind(this)}></button>
        <button className="bar" onClick={this.play.bind(this)}></button>
        <button className="bar" onClick={this.play.bind(this)}></button>
        <button className="bar" onClick={this.play.bind(this)}></button>
        <button className="bar" onClick={this.play.bind(this)}></button>
        <button className="bar" onClick={this.play.bind(this)}></button>
      </div>
      <div className="footer">

      </div>
    </div>
    );
  }
}




ReactDOM.render(
  <App />,
  document.getElementById('root')
);
