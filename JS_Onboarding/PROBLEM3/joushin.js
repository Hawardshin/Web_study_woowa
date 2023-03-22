//0~10 : 3
//0~100 : (3 * 10) + (3) * 10 = 60
//0~ 1000 : 10 * (0~100) + 3 * 100 = 900
//0~ 10000 :  10 * (0~ 1000) + 3 * 1000 = 12000
//문제 조건 최대 4자리수 (5자리는 4자리수 max)
//1자리수 인 경우 3/6/9 로 갯수가 결정! 즉 x / 3 = Answer
//2자리수 인 경우 10 * x + 1 *y 인 경우  (x -1) * 3 + y/3 = answer
//3자리수인경우 100 * x + 10 * y + 1 * z = (x - 1) * (60) + (x -1)/3 * 100 +  (if (x % 3 ==0) 10 *x + y) + 2자리수 인경우
//4자리수 인 경우 1000 * a + 100 * b + 10 *c + d =
//40 : 3*
function recur(depth, number)
{
  if (depth === 1)
  {
    return (Math.floor(number /3));
  }
  else {
    let result = 0;
    let dump = 0;
    switch (depth)
    {
      case 2 : dump = 3;
              break;
      case 3 :  dump = 60;
              break;
      case 4 : dump = 900;
              break;
      case 5 :  return (12000);
      default : return (-1);
    }
    let _square  = 10 ** (depth - 1);//10의 n승
    let  n_digit = Math.floor(number /_square);//현재 자릿수
    result = dump * (n_digit);
    if (Math.floor(n_digit / 3) > 0 &&n_digit % 3 == 0)//자릿수 윗자리가 3,6,9인 경우
    {

      result += (Math.floor(n_digit / 3) - 1) * 10;
      result += (number % 10) + 1;
    }
    else{//그 외의 경우
      result += (Math.floor(n_digit /3) * 10);
    }
    return (result + recur(depth - 1, number % 10));
  }
}

function problem3(number) {
  var answer ;
  answer = recur(number.toString().length,number);
  console.log(answer);
  return answer;
}
// console.log(problem3(13));//4

// console.log(problem3(33));//14
// console.log(problem3(1));//0
// console.log(problem3(100));//60
// console.log(problem3(300));//181
// console.log(problem3(303));//185
module.exports = problem3;
