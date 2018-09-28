// Write a function "factors" which is given a number and returns an array
// containing all its factors.
// What are factors? --> https://tinyurl.com/gncg62o

function factors(num1) {
    if (num1 = 0) {
        str = '';
    } else {
	var str = "0"; //placeholder var for the 1st output
	for (var i = 1; i <= num1; i++) {
		/*if input # has a remainder of 0

		   then add to list and add 1 to i*/
		if (num1 % i == 0) {
			str += ',' + i;
		}
	}
    return str
}
}