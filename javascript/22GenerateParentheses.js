/**
 * @param {number} n
 * @return {string[]}
 */

const generateParenthesis = (n) => {
    // initialize a array with parentheses
    const res = [];

    //initialize finish condition for backtracking
    const go = (left, right, string) => {
        //left, right  - how much remaining from left and right side
        //condition for exit if left more than right
        if(left > right) return;
       
        //condition for exit if conditions finished
        if(left===0 && right===0) {
            res.push(string);
            return;
        }

        //go to recursion
        if(left > 0) go(left - 1, right, string + '(');
        if(right > 0) go(left, right - 1, string + ')');
    };
    //initialize  main function with start conditions
    go(n, n, '');
    //return finished array
    return res;
};

var n = 3;

console.table(generateParenthesis(n));
