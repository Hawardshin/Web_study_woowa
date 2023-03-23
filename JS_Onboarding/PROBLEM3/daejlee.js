/*
REQUIRED FEATUERS
1. parse number, if invalid return null
2. get each number for each digit, if any of them is 3 then result++
*/

function problem3(number)
{
	if (!Number.isInteger(number) || number < 1 || number > 10000)
		return (null);
	cnt = 0;
	res = 0;
	const div = 10;
	while (cnt++ < number)
	{
		buf = cnt;
		while (buf)
		{
			rem = buf % div;
			if (rem === 3 || rem === 6 || rem === 9)
				res++;
			buf = parseInt(buf / div);
		}
	}
	return (res);
}

module.export(problem3);