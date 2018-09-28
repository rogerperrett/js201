// Write a function "makeSquare" which is given a size and returns a square of
// that size using asterisks.
// Example:
// makeSquare(5)
// *****
// *****
// *****
// *****
// *****

function makeSquare(num) {
	var row = ""; //creates the first row
	for (var i = 1; i <= num; i++) {
		row += "*";
    }
	var height = row; // creates columns
	for (var j = 1; j < num; j++) {
		height += "\n" + row;
    }
    return height;
    
}
makeSquare(0);


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBox" which is given a width and height and returns a
// hollow box of those dimensions.
// Example:
// makeBox(6, 4)
// ******
// *    *
// *    *
// ******
function makeBox(n) {
    var rowSymbol = ""; // symbols used to creates the top and bottom row
    for (var i = 0; i < n; i++) { // creates the solid row of the box
        rowSymbol += "*";
    }
    var hollowRow = ""; // makes the first hollow row of the box
    for (var x = 0; x <= n; x++) {
        if (x === 0) {
            hollowRow += "*";
        } else if (x === n) {
            hollowRow += "*";
        } else {
            hollowRow += " ";
        }
        var allHollowRows = hollowRow; //repeats hollow row
        for (var j = 0; j <= n; j++) {
            allHollowRows += "\n" + hollowRow;
        }
        var allRows = rowSymbol + "\n" + allHollowRows + "\n" + rowSymbol; //concatenates rows
    }
    console.log(allRows)
    return allRows;
}
makeBox(0);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBanner" which is given some text and returns a banner
// with a border surrounding the text. The border should stretch to the length
// of the text.
// Example:
// makeBanner('Welcome to DigitalCrafts')
// ****************************
// * Welcome to DigitalCrafts *
// ****************************
function makeBanner(n) {
	var rowSymbol = "*"; //symbols used to creates the top and bottom row
	var stringLength = n.length + 4;
	/*brings back length of string and adds 4 to compensate

	               for the asterisks and spaces*/
	for (var i = 1; i < stringLength; i++) { //creates layer of asterisks to use on top and bottom
		rowSymbol += "*";
	}
	var inputString = ""; //undefined variable to be used to concatenate the output string
	for (var i = 1; i < 2; i++) {
		/*creates a single loop which concatenates asterisks

		               and the value of n*/
		inputString += "* " + n + " *";
	}
	var output = rowSymbol + "\n" + inputString + "\n" + rowSymbol; //concatenates rows
	return output;
}
makeBanner("Welcome to DigitalCrafts");