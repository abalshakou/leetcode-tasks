/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */

var divide = function (dividend, divisor) {
    if (divisor === 0) return 0;
    if (dividend === 0) return 0;
    if (divisor === -2147483648) return dividend === divisor;
    if (dividend === -2147483648) {
        if (divisor === 1) {
            return -2147483648;
        } else if (divisor === -1) return 2147483647;
    }

    //init bool for check result negative or positive
    var isNegative = false;
    let isAllNegative = false;
    //first check if divisor negative set it positive
    
    if ((divisor < 0) && (dividend < 0)) {
        isAllNegative = true;
        console.log(isAllNegative)
    }

    if (divisor < 0) {
        divisor = Math.max(divisor, -divisor);
        isNegative = true;
    }

    if (dividend < 0) {
        dividend = Math.max(dividend, -dividend);
        isNegative = true;
    }

    //then we could divident minus divisor and count i loop 
    let i = 0;
    while (dividend >= divisor) {

        //check border decision then divide without reminder
        if (divisor == dividend) {
            i++;
            break;
        } else {
            //need check negative divident 
            if (dividend < 0) {
                i--;
                break;
            }
            dividend = dividend - divisor;
        }

        i++
    }

    //check bool and set result in negative
    if (isNegative && !isAllNegative) {
        i = Math.min(i, -i);
    }

    return i;
};

var dividend = "15";
var divisor = "-3";

console.log(divide(dividend, divisor))