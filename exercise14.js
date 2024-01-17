function budgetTracker(expenses) {
  const yenToDoll =
    expenses.map((el) => el * 0.0089).reduce((a, b) => a + b) / 7;

  return Math.round(yenToDoll);
}

module.exports = {
  budgetTracker,
};
