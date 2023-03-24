function problem3(num: number): number {
  var answer: number = 0;

  for (let i = 1; i <= num; i++) {
    for (const txt of i.toString()) {
      if (["3", "6", "9"].includes(txt)) answer++;
    }
  }
  return answer;
}

module.exports = problem3;
