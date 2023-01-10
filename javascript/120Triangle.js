/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var minimumTotal = function(triangle) {

    let values = [];
    values[0] = triangle[0][0];
    var sum = values[0];
    let minIndex = 0;
    var minimum ;

    for(let k = 1; k < triangle.length; k++) {

        values[k] = triangle[k];
        
           for(let n = minIndex; n <= minIndex + 1; n++) {
            //console.log(minimum)
             minimum = triangle[k][minIndex];
             
         
            if (triangle[k][minIndex] > triangle[k][minIndex+1]) {
             
                minIndex = minIndex + 1;
                minimum = triangle[k][minIndex + 1];
               
              
             
            }  else {
               // minIndex = n - 1;
                } 
            } 
                
           
            sum = sum + minimum;
         }
         
         return sum;
};

var triangle = [[-1],[2,3],[1,-1,-3]];

console.log(minimumTotal(triangle))