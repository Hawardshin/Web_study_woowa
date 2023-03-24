function addDigits(n) {
  let ret = 0;
  while (n) {
    ret += n % 10;
    n = parseInt(n / 10);
  }
  return ret;
}

function multDigits(n) {
  let ret = 1;
  while (n) {
    ret *= n % 10;
    n = parseInt(n / 10);
  }
  return ret;
}

function max(n1, n2) {
  return n1 > n2 ? n1 : n2;
}

function pageMax(n) {
  return max(addDigits(n), multDigits(n));
}

function personMax(person) {
  return max(pageMax(person[0]), pageMax(person[1]));
}

function scoreCmp(n1, n2) {
  if (n1 == n2) return 0;
  return n1 > n2 ? 1 : 2;
}

function outOfRange_1_400(n) {
  if (n < 1 || n > 400) return 1;
  return 0;
}

function isConsecutive(left, right) {
  if (left + 1 == right) return 1;
  return 0;
}

function invalidArgs(left, right) {
  if (!Number.isInteger(left) || !Number.isInteger(right)) return 1;
  if (outOfRange_1_400(left) || outOfRange_1_400(right)) return 1;
  if (!isConsecutive(left, right)) return 1;
  return 0;
}

function problem1(pobi, crong) {
  if (invalidArgs(pobi[0], pobi[1]) || invalidArgs(crong[0], crong[1]))
    return -1;
  return scoreCmp(personMax(pobi), personMax(crong));
}

export default problem1;
console.log(multDigits(123));
