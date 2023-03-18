function getPageScore(page) {
  let sum = 0;
  let product = 1;
  while (page > 0) {
    const digit = page % 10;
    sum += digit;
    product *= digit;
    page = Math.floor(page / 10);
  }
  return Math.max(sum, product);
}

function checkInput(arrayToCheck) {
  if (arrayToCheck[0] % 2 == 1 && arrayToCheck[1] - arrayToCheck[0] == 1)
    return true;
  return false;
}

function solution(pobi, crong) {
  // Check if the page numbers are valid
  if (checkInput(pobi, crong) == false) {
    return -1;
  }

  const pobiScore = Math.max(getPageScore(pobi[0]), getPageScore(pobi[1]));
  const crongScore = Math.max(getPageScore(crong[0]), getPageScore(crong[1]));

  if (pobiScore > crongScore) {
    return 1;
  } else if (pobiScore < crongScore) {
    return 2;
  } else {
    return 0;
  }
}

console.log(solution([11, 12], [11, 12]));
