/**
 * @param {number} x
 * @return {number}
 */
 
var reverse = function(x) {
    const absoluteNumber = Math.abs(x);
    const threshold = Math.pow(2, 31);
    const isSigned = x > 0 ? false : true;

    if (x === 0) { 
        return 0 
    }

    //reverse the string represent of number
    var cleanedNumber = `${absoluteNumber}`.split('').reverse().join('')
    cleanedNumber = Number(cleanedNumber)


    	// return zero for the output that's bigger than 32 bit
    if (cleanedNumber > threshold - 1 || cleanedNumber < -threshold) { return 0 }
 
    return isSigned ? -cleanedNumber : cleanedNumber;
}

var x = 4210;
 

console.log(reverse(x))