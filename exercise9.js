function twoArrays(arr, arr2) {
  let count = 0;

  const sameLength = arr.length === arr2.length;

  if (sameLength) {
    arr.forEach((el, index) => {
      if (el === arr2[index]) count++;
    });
  } else count = 0;

  return count;
}

module.exports = {
  twoArrays,
};
