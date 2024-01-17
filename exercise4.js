function looper(arr) {
  let count = 0;

  arr.forEach((el, index) => {
    console.log(`Element: ${el}, Index: ${index}`);
    count++;
  });

  return count;
}

var arr = ["one", "two", "three", "four"];

module.exports = {
  looper,
  arr,
};
