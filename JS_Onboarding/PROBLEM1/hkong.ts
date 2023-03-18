function problem1(pobi: number[], crong: number[]): number {
  var answer: number;

  const pobiScore = getMyScore(pobi);
  const crongScore = getMyScore(crong);

  if (pobiScore === -1 || crongScore === -1) answer = -1;
  else if (pobiScore === crongScore) answer = 0;
  else if (pobiScore > crongScore) answer = 1;
  else answer = 2;

  return answer;
}

function getMyScore(character: number[]): number {
  const [page1, page2] = character;

  if (!checkValid(page1, page2)) return -1;

  const result1 = getBiggerNum(page1);
  const result2 = getBiggerNum(page2);
  return Math.max(result1, result2);
}

function checkValid(page1: number, page2: number): boolean {
  if (!Number.isInteger(page1) || !Number.isInteger(page2)) {
    console.error("Input is not integer");
    return false;
  } else if (page1 <= 0 || page1 > 400 || page2 <= 0 || page2 > 400) {
    console.error("Input is not in range 1 ~ 400");
    return false;
  } else if (Math.abs(page1 - page2) !== 1) {
    console.error("Difference of two page should be 1");
    return false;
  }
  return true;
}

function getBiggerNum(page: number): number {
  let add = 0;
  let multiple = 1;

  for (const num of page.toString()) {
    add += Number(num);
  }
  for (const num of page.toString()) {
    multiple *= Number(num);
  }
  return Math.max(add, multiple);
}

module.exports = problem1;
