/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = (input) => {
     var size = input;
     var row = '';
     for (var i=1; i<=size; i++){
         for(var k=1; (k<=size-i); k++){
             row += ' ';
         }
         for(var j=1; j<=i; j++ ){
             row += ' *';
         }
         row += "  \n";
     }
     console.log(row);
     return row;
 };

/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/
buildPyramid(5);
module.exports = buildPyramid;
