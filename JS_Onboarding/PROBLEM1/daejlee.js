/*
REQUIRED FEATURES
1. making random 2x2 index table for pobi crong
	index range 1 ~ 400 (1, 2 ~ 399, 400) and get max num for each pair and save
2. print output format as directed
*/

function get_res(pobi, crong)
{
	let res;
	if (get_max(pobi[0]) > get_max(crong[0]))
		res = 1;
	else if (get_max(pobi[0]) === get_max(crong[0]))
		res = 0;
	else
		res = 2;
	return (res);
}

function get_max(idx)
{
	if (idx * 2 + 1 > idx * (idx + 1))
		return (idx * 2 + 1);
	else
		return (idx * (idx + 1));
}

function make_table()
{
	let idx;
	idx = Math.floor(Math.random() * 399);
	table = [idx, idx + 1];
	return (table);
}

function problem1()
{
	pobi = make_table();
	crong = make_table();
	res = get_res(pobi, crong);
	return (res);
}

module.exports = problem1;
