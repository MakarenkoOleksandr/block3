function firstLoop() {
  for (i; i <= 10; i++) {
    console.log(i);
  }
  return i;
}

let i = 1;

module.exports = {
  firstLoop,
  i,
};
