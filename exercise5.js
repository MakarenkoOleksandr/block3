function isString(arr) {
  const newArr = [];

  arr.forEach((el) => {
    const checkStringInArr = typeof el === "string";

    if (checkStringInArr) {
      newArr.push(el);
    }
  });

  return newArr;
}

module.exports = {
  isString,
};
