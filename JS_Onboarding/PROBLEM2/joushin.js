function problem2(cryptogram) {
  var answer;
  let stack = new Array();
  for (c of cryptogram)
  {
    if (stack.length != 0 && stack[stack.length - 1] == c)
      stack.pop();
    else
      stack.push(c);
  }
  answer = stack.toString().replaceAll(',','');
  return answer;
}

// console.log(problem2("browoanoommnaon"));
// console.log(problem2("zyelleyz"));

module.exports = problem2;
