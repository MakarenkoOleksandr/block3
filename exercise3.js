function isEven(arr) {
  let count = 0;

  arr.filter((el) => {
    const isEven = el % 2 === 0;
    if (isEven === true) {
      return count++;
    }
  });

  return count;
}

module.exports = {
  isEven,
};
