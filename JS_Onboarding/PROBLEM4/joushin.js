//arr.join
function problem4(word) {
  var answer;
  let ret_arr = new Array();
  let up_alpha= "ZYXWVUTSRQPONMLKJIHGFEDCBA";
  let down_alpha = "zyxwvutsrqponmlkjihgfedcba";
  word.split('').forEach(c=>{
    if (c >= 'A' && c <='Z')
      ret_arr.push(up_alpha[c.charCodeAt(0)-'A'.charCodeAt(0)]);
    else if (c >= 'a' && c <= 'z')
      ret_arr.push(down_alpha[c.charCodeAt(0) - 'a'.charCodeAt(0)]);
    else
      ret_arr.push(c);
  }
  )
  answer = ret_arr.join("");
  return answer;
}
// console.log(problem4("I love you"));
module.exports = problem4;
