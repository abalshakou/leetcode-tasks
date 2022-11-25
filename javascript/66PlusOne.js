/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    
    var cleanedNumber = BigInt(digits.join('')) 
    
    cleanedNumber = String(cleanedNumber + 1n ) ;
    cleanedNumber = cleanedNumber.split('')
   
    return cleanedNumber
};

var digits = [3,5,4];
 

console.log(plusOne(digits))