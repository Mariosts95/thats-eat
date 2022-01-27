const calcTotal = (array, digits) => {
  return array
    .reduce((prev, cur) => {
      return prev + cur.price * cur.amount;
    }, 0)
    .toFixed(digits);
};

export default calcTotal;
