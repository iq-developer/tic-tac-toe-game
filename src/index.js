import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {

  play(event) {
    console.log(event.target);
    if (event.target.innerHTML === '✖' || event.target.innerHTML === '⭘'){
      alert('This place is already occupied. Try another one.');
      return;
    } else {
      event.target.innerHTML = '✖';
      event.target.classList.add('x');
    }

    // Нолики случайным образом
    function nolls() {
      let buttons = document.querySelectorAll('button');
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
