type StateObject = {
  id: number,
  value: string,
  marked: string,
};

type State = Array<StateObject>;

const data = (): State => {
  const arr = [];
  for (let i = 0; i < 9; i++) {
    arr.push({
      id: i,
      value: '',
      marked: '',
    })
  }
  return arr;
}

export default data;
