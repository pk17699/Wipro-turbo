/* Write a Program to Flatten a given n-dimensional array */

const flatten = (input) => {
	// Write your code here
	Array.prototype.flatten = (array) => {
		const newAr = [];
		const flat = (array) => {
			array.map(i => {
				Array.isArray(i) ? flat(i) : newAr.push(i)
			})
		}
		flat(input);
		return newAr;
	};
	const result = input.flatten();
	console.log(result);
	return result;
};
flatten([1, [2, 3], [[4], [5]]])

/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;
