const checkWin = (state, sign) => {

  const winPositions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

  let result = [];

  winPositions.forEach(item => {
    if ((state[item[0]].value === sign) && (state[item[1]].value === sign) && (state[item[2]].value === sign)) {

      const stateClone = state.map(elem => ({ ...elem }));
      stateClone[item[0]].marked = 'marked';
      stateClone[item[1]].marked = 'marked';
      stateClone[item[2]].marked = 'marked';
      result = stateClone;

    }
  });

  console.log('result: ', result);
  return result;
}

export default checkWin;
