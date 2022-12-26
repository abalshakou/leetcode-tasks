/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {

    let values = [];

    for(let n = 0; n < numRows; n++) {
        values[n] = [];
        values[n][0] = 1;
      
            //second loop needed for find inside elements
        for(let k = 1; k < n; k++) {
           
            values[n][k] = values[n-1][k-1] + values[n-1][k]
            
            console.log('==========start=============');
            console.log(values[n][k]);
            console.log('==========end=============');
        }
        values[n][n] = 1;
    }
    return values;
};

var numRows = 5;

console.log(generate(numRows))