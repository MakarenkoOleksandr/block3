function timesTwo(arr) {
  const newArr = [];
  arr.forEach((el) => newArr.push(el * 2));

  return newArr;
}

module.exports = {
  timesTwo,
};
