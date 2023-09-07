/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var str = s.toLowerCase().replace(/[_\W]/g,'');
    const lastIndex = str.length - 1;
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[lastIndex - i]) {
            return false;
        }
    }
    return true;
};

var s = "pwwwp0 0pwwwp";

console.log(isPalindrome(s))