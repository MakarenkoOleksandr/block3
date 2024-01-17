function lowerCaseLetters(str) {
  const newStr = str
    .replace(/\d/g, "")
    .replace(/([A-Z])/g, " $1")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");

  return newStr;
}

module.exports = {
  lowerCaseLetters,
};
