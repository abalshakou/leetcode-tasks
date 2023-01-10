/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {

    let values = [];

    for(let n = 0; n <= rowIndex; n++) {
        values[n] = [];
        values[n][0] = 1;
      
            //second loop needed for find inside elements
        for(let k = 1; k < n; k++) {
           
            values[n][k] = values[n-1][k-1] + values[n-1][k]
        
        }
        values[n][n] = 1;
    }
    return values[rowIndex];
};

var rowIndex = 7;

console.log(getRow(rowIndex))