const data = () => {
  const arr = [];
  for (let i = 0; i < 9; i++) {
    arr.push({
      id: i,
      value: null
    })
  }
  return arr;
}

export default data;