import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {

  play(event) {

    if (event.target.innerHTML === '✖' || event.target.innerHTML === '⭘'){
      alert('This place is already occupied. Try another one.');
      return;
    } else {
      event.target.innerHTML = '✖';
      event.target.classList.add('x');
    }

    let buttons = document.querySelectorAll('button');
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
      alert('X wins!');
      return;
    }

    // Add ⭘ randomly
    function nolls() {
      let emptyCells = Array.from(buttons).filter(item => item.innerHTML === '&nbsp;');
      let randomCell = randomInteger(0, emptyCells.length-1);
      console.log({randomCell}, emptyCells.length-1);

      if (emptyCells[randomCell]){
        emptyCells[randomCell].innerHTML = '⭘';
        emptyCells[randomCell].classList.add('o');
      }
    }

    nolls();

    function randomInteger(min, max) {
      let rand = min - 0.5 + Math.random() * (max - min + 1);
      return Math.round(rand);
    }

  }

  render() {
    return (
    <div className="wrapper">
      <div className="header">
        <h1>Tic-tac-toe game</h1>
      </div>
      <div id="messages"></div>
      <div className="field">
        <button className="bar" onClick={this.play.bind(this)}>&nbsp;</button>
        <button className="bar" onClick={this.play.bind(this)}>&nbsp;</button>
        <button className="bar" onClick={this.play.bind(this)}>&nbsp;</button>
        <button className="bar" onClick={this.play.bind(this)}>&nbsp;</button>
        <button className="bar" onClick={this.play.bind(this)}>&nbsp;</button>
        <button className="bar" onClick={this.play.bind(this)}>&nbsp;</button>
        <button className="bar" onClick={this.play.bind(this)}>&nbsp;</button>
        <button className="bar" onClick={this.play.bind(this)}>&nbsp;</button>
        <button className="bar" onClick={this.play.bind(this)}>&nbsp;</button>
      </div>
      <div className="footer">
      </div>
    </div>
    );
  }
}

// class Bar extends React.Component {
//   render() {
//     return (
//       <button className="bar" onClick={this.play.bind(this)}></button>
//     );
//   }
// }



ReactDOM.render(
  <App />,
  document.getElementById('root')
);
