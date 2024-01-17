function longestString(arr, argMinLength) {
  const result = arr.reduce((longest, current) => {
    return current.length > argMinLength ? current : longest;
  }, null);

  return result;
}

module.exports = {
  longestString,
};
