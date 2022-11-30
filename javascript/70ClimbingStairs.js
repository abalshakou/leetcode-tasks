/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    
    if(n === 0 || n === 1 ) return 1;

    let a = 1;
    let b = 2;
    let c;
    let count = 2;


    while(count < n) {
        c = a + b;
        a = b;
        b = c;
        count++;
    }

    return b;

};

var n = 500;
 

console.log(climbStairs(n))