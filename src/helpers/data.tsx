import { StateType } from './types';

const data = (): StateType => {
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
