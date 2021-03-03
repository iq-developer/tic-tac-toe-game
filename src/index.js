import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  render() {
    return (
    <div>
    <div className="header">
      <h1>Tic-tac-toe game</h1>
    </div>
    <div className="field">
      <Bar /><Bar /><Bar />
      <Bar /><Bar /><Bar />
      <Bar /><Bar /><Bar />
    </div>
    <div className="footer">
    </div>
    </div>
    );
  }
}

class Bar extends React.Component {
  render() {
    return (
      <button className="bar">
        
      </button>
    );
  }
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
);
