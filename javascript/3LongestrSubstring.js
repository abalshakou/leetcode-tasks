/**
 * @param {string} s
 * @return {number}
 */

 var s = "pwwkew";

 var lengthOfLongestSubstring = function(s) {
    let output = 0;
    for (let i = 0; i < s.length; i++) {
      let word = s[i];
      for (let j = i + 1; j < s.length; j++) {
        if (word.indexOf(s[j]) !== -1) break;
        else word += s[j]
      }
      output = Math.max(word.length, output);
    }
    return output;
};

console.log(lengthOfLongestSubstring(s))