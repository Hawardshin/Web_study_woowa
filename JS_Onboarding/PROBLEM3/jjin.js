function problem3(number) {
  let clap = 0;
  for (let i = 1; i <= number; i++) {
    let n = i;
    while (n) {
      if ([3, 6, 9].includes(n % 10))
        clap++;
      n = parseInt(n / 10);
    }
  }
  return clap;
}

module.exports = problem3;
