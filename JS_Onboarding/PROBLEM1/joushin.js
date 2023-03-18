
const numtoarr = (num) => {
  let ret_ar = num.toString().split(',');
  if (ret_ar.length != 2)
    return (null);
  for (let i =0;i < 2;i++)
  {
    ret_ar[i] = ret_ar[i].split('');
    ret_ar[i].forEach(element => {
      if(element<'0' || element > '9')
        return (null);
    });
    ret_ar[i] = ret_ar[i].map(Number);
  }
  return ret_ar;
};
const digit_sum = (arr)=>
{
  let sum = arr.reduce((prev, curr, idx) => {
    return prev + curr;
  })
  return (sum);
}
const digit_mul = (arr)=>
{
  let sum = arr.reduce((prev, curr, idx) => {
    return prev * curr;
  })
  return (sum);
}

const check_page = (p_prev, p_next)=> (((p_next - p_prev) != 1 || p_prev%2 == 0 || p_prev <=1 || p_next >= 400
|| !Number.isInteger(Number(p_prev)) || !Number.isInteger(Number(p_next))
));

const max_result = (pobi)=>
{
  let max;
  let s_p = digit_sum(pobi[0]);
  let m_p = digit_mul(pobi[0]);
  s_p > m_p ? max = s_p: max=m_p;
  s_p = digit_sum(pobi[1]);
  m_p = digit_mul(pobi[1]);
  let m_max;
  s_p > m_p ? m_max = s_p: m_max=m_p;
  if (m_max > max)
    max = m_max;
  return (max);
}

function problem1(pobi, crong) {
  let answer;
  if (check_page(pobi[0], pobi[1]) || check_page(crong[0], crong[1]))
    return (-1);
  let pobi_ar = numtoarr(pobi);
  let crong_ar = numtoarr(crong);
  if (pobi_ar === null || crong_ar === null)
    return (-1);
  let pobi_point = max_result(pobi_ar);
  let crong_point = max_result(crong_ar);
  if ( pobi_point< crong_point)
    return (2);
  else if (pobi_point === crong_point)
    return (0);
  else
    return(1);
  return answer;
}
module.exports = problem1;
// const pobi = [97, '98'], crong = [197,198];
const pobi = ['3.1', '4.1'], crong = [211,212];
// const pobi = [99, 102], crong = [211,212];
console.log(problem1 (pobi, crong));
