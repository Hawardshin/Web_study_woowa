function problem2(cryptogram: string): string {
  var answer;

  answer = deleteDuplicate(cryptogram);
  while (answer !== deleteDuplicate(answer)) {
    answer = deleteDuplicate(answer);
  }
  return answer;
}

function deleteDuplicate(str: string): string {
  let result: string = "";
  let flag: boolean = false;
  let comp: string = str[0];

  if (str === "") {
    return str;
  }
  for (const char of str.substring(1)) {
    if (flag) {
      if (char !== comp) {
        comp = char;
        flag = false;
      }
      continue;
    }
    if (char !== comp) {
      result += comp;
      comp = char;
    } else {
      flag = true;
    }
  }
  if (!flag) result += comp;
  return result;
}

module.exports = problem2;
