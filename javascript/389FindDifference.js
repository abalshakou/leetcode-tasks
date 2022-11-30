/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
 var findTheDifference = function (s, t) {
    for (let i = 0; i < s.length; i++) {
        t = t.replace(s[i], '')
    }
    return t;
};

var s = "abcd", t = "abcde";

console.log(findTheDifference(s, t))