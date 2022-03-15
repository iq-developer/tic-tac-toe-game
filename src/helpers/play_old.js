function play(event) {
  let buttons = document.querySelectorAll('button');
  let message = document.querySelector('#message');

  if (isFinished) return;

  if (event.target.innerHTML === '✖' || event.target.innerHTML === 'O') {
    alert('This place is already occupied. Try another one.');
    return;
  } else {
    event.target.innerHTML = '✖';
    event.target.classList.add('x');
    message.className = '';
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
    message.className = 'win';
    setMessage('✖ wins. Play again?');
    setIsFinished(true);
    return;
  }

  let emptyCells = Array.from(buttons).filter(item => item.innerHTML === '');
  let randomCell = randomInteger(0, emptyCells.length - 1);
  console.log({ randomCell }, emptyCells.length - 1);

  if (emptyCells[randomCell]) {
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
    message.className = 'loose';
    setMessage('O wins. Play again?');
    setIsFinished(true);
    return;
  }

  function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

}

export default play;
