// Write a function "leetspeak" which is given a string, and returns the
// leetspeak equivalent of the string.
// To convert text to its leetspeak version, make the following substitutions:
// A => 4
// E => 3
// G => 6
// I => 1
// O => 0
// S => 5
// T => 7
//
// Example:
// leetspeak('Leet') --> "l337"
var list = {
    A: '4',
	B: 'b',
	C: 'c',
	D: 'd',
	E: '3',
	F: 'f',
	G: '6',
	H: 'h',
	I: '1',
	J: 'j',
	K: 'k',
	L: 'l',
	M: 'm',
	N: 'n',
	O: '0',
	P: 'p',
	Q: 'q',
	R: 'r',
	S: '5',
	T: '7',
	U: 'u',
	V: 'v',
	W: 'w',
	X: 'x',
	Y: 'y',
    Z: 'z',
    a: '4',
	b: 'B',
	c: 'C',
	d: 'D',
	e: '3',
	f: 'F',
	g: '6',
	h: 'H',
	i: '1',
	j: 'J',
	k: 'K',
	l: 'L',
	m: 'M',
	n: 'N',
	o: '0',
	p: 'P',
	q: 'Q',
	r: 'R',
	s: '5',
	t: '7',
	u: 'U',
	v: 'V',
	w: 'W',
	x: 'X',
	y: 'Y',
	z: 'Z'
  }
  
  function leetspeak(string) {
    var array = string.split('');
    for (var i in array) {
        array[i] = list[array[i]];
    }
    console.log(array.join(''))
    return array.join('');
}
leetspeak('BANANA');