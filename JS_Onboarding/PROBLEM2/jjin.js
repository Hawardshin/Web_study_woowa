function findDuplicateRange(str) {
  for (let i = 0; i < str.length - 1; i++) {
    let start = i;
    while ((i < str.length - 1) && (str[i] === str[i + 1]))
      i++;
    if (start != i)
      return { start, end: i };
  }
  return null;
}

function removeDuplicate(str, range) {
  return str.substring(0, range.start) + str.substring(range.end + 1);
}

function problem2(cryptogram) {
  let range = findDuplicateRange(cryptogram);
  while (range) {
    cryptogram = removeDuplicate(cryptogram, range);
    range = findDuplicateRange(cryptogram);
  }
  return cryptogram;
}

module.exports = problem2;
