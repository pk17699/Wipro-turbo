function removeDuplicates(array){
    return array.filter((value, index) => array.indexOf(value) === index);
}
var arr = [1, 2, 3, 1, 2]
console.log(removeDuplicates(arr))