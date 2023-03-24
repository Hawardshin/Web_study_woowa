function problem5(money: number): number[] {
  var answer: number[] = new Array(9);
  answer.fill(0);
  const moneyUnits: number[] = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  moneyUnits.forEach((unit, index) => {
    if (Math.floor(money / unit) > 0) {
      answer[index] = Math.floor(money / unit);
      money -= answer[index] * unit;
    }
  });
  return answer;
}

module.exports = problem5;
