function problem5(money) {
  var answer =  new Array();
  [50000,10000,5000,1000,500,100,50,10,1].forEach(won=>{
    answer.push(Math.floor(money/won));
    money%=won;
  }
  )
  return answer;
}

// console.log(problem5(50237));
// console.log(problem5(15000));
module.exports = problem5;
