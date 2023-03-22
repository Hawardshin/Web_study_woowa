/*
REQUIRED FEATURES
1. receive cryp and parse, if it violates the restrictions then return NULL.
2. delete duplicated characters reversely, and return
*/

function removal_iter(cryp)
{
	let i = 0;
	let k;
	while (i < cryp.length)
	{
		if (cryp[i] === cryp[i + 1])
		{
			k = 0;
			while (cryp[i + k] === cryp[i + k + 1])
				k++;
			cryp.splice(i, k + 1);
			i = 0;
		}
		else
			i++;
	}
	return (cryp);
}

function remove_dup(cryp)
{
	cryp = cryp.split("");
	cryp = cryp.reverse();

	cryp = removal_iter(cryp);

	cryp = cryp.reverse();
	cryp = cryp.join("");
	return (cryp);
}

function problem2(cryp)
{
	let i = 0;
	if (cryp.length > 1000)
		return (null);
	while (cryp[i])
	{
		if (cryp[i] > 'z' || cryp[i++] < 'a')
			return (null);
	}
	return (remove_dup(cryp));
}

module.exports = problem2;
