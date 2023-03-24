interface DuplicateRange {
  start: number;
  end: number;
}

function removeDuplicates(str: string, range: DuplicateRange): string {
  return str.substring(0, range.start) + str.substring(range.end + 1);
}

function findDuplicateRange(str: string): DuplicateRange | null {
  for (let i = 0; i < str.length - 1; i++) {
    let start = i;
    while (i < str.length - 1 && str[i] === str[i + 1]) {
      i++;
    }
    if (i !== start) {
      return { start, end: i };
    }
  }
  return null;
}

function p2(cryptogram: string): string {
  let range = findDuplicateRange(cryptogram);
  while (range !== null) {
    cryptogram = removeDuplicates(cryptogram, range);
    range = findDuplicateRange(cryptogram);
  }
  return cryptogram;
}

export default p2;