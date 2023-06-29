/* Write a Program to convert an array of objects to an object
	based on a given key */


const convert = (arr, keyField) => {
	// Write your code here
	const result = (array, keyField) => 
		arr.reduce((obj, item) => {
			obj[item[keyField]] = item
			return obj
		}, {})
	
	const finResult = result(arr, keyField)
	return finResult;
};
convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')

/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
			'1': {id: 1, value: 'abc'},
			'2': {id: 2, value: 'xyz'}
		 }


*/

module.exports = convert;
