const isWin = (state, sign) => {
  if ((state[0].value === sign) && (state[1].value === sign) && (state[2].value === sign)
    || (state[3].value === sign) && (state[4].value === sign) && (state[5].value === sign)
    || (state[6].value === sign) && (state[7].value === sign) && (state[8].value === sign)
    || (state[0].value === sign) && (state[3].value === sign) && (state[6].value === sign)
    || (state[1].value === sign) && (state[4].value === sign) && (state[7].value === sign)
    || (state[2].value === sign) && (state[5].value === sign) && (state[8].value === sign)
    || (state[0].value === sign) && (state[4].value === sign) && (state[8].value === sign)
    || (state[2].value === sign) && (state[4].value === sign) && (state[6].value === sign)
  ) return true;
  return false;
}

export default isWin;
