type StateObject = {
  id: number,
  value: string,
  marked: string,
};

type State = Array<StateObject>;

const checkWin = (state: State, sign: string) => {

  const winPositions: Array<[number, number, number]> = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

  let result: State = [];

  winPositions.forEach((item: [number, number, number]): void => {
    if ((state[item[0]].value === sign) && (state[item[1]].value === sign) && (state[item[2]].value === sign)) {

      const stateClone: State = state.map((elem: StateObject): StateObject => ({ ...elem }));
      stateClone[item[0]].marked = 'marked';
      stateClone[item[1]].marked = 'marked';
      stateClone[item[2]].marked = 'marked';
      result = stateClone;
      console.log('stateClone', stateClone);

    }
  });

  console.log('state', state);

  console.log('result', result);


  return result;
}

export default checkWin;
