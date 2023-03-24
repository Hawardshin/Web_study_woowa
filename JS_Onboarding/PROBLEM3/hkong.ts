function problem3(num: number): number {
  var answer: number = 0;

  for (let i = 1; i <= num; i++) {
    for (let txt of i.toString())
      if (txt === "3" || txt === "6" || txt === "9") answer++;
  }
  return answer;
}

module.exports = problem3;
