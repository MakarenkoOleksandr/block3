function shortener(str) {
  const [firstName, lastName] = str.split(" ");
  const abbr = lastName[0].toUpperCase();
  return `${firstName.charAt(0).toUpperCase()}${firstName.slice(1)} ${abbr}.`;
}

module.exports = {
  shortener,
};
