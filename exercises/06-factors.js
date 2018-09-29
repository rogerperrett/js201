// Write a function "factors" which is given a number and returns an array
// containing all its factors.
// What are factors? --> https://tinyurl.com/gncg62o

function factors(num) {
	var str = "";
	for (var i = 1; i <= num; i++) {
		if (num % i == 0) {
			str += ',' + i;
		}
		var str1 = str.substr(1);
    }
    console.log(str1)
	return str1
}
