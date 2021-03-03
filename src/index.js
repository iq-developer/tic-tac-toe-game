import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {

  play(event) {
    console.log(event.target);
    if (event.target.innerHTML === '✖' || event.target.innerHTML === '⭘'){
      alert('это место занято :)');
    } else {
      event.target.innerHTML = '✖';
      event.target.classList.add('x');
    }



  }

  render() {
    return (
    <div className="wrapper">
      <div className="header">
        <h1>Tic-tac-toe game</h1>
      </div>
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
