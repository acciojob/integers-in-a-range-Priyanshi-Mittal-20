// write your code here
function range(s,e)
{
	let arr=[]
	for(let i=s;i<=e;i++)
		{
			arr.push(i)
		}
	return arr
}

// do not change the code below.
let start = parseInt(prompt("Enter Start of the Range."));
let end = parseInt(prompt("Enter End Of the Range."));
alert(range(start, end));
