/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle === '') return 0
    let i = 0;
    while (i <= haystack.length - needle.length) {
        if (haystack[i] === needle[0] && haystack.substring(i, i + needle.length) === needle) {
            return i
        }
        i++
    }
    return -1
};

var haystack = "67569sadbutsad";
var needle = "sad";

console.log(strStr(haystack, needle))