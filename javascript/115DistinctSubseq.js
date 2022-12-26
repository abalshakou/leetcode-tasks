/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    //Create DP array containig possible results for each char in t
    let dp = Array(t.length+1).fill(0);
    
    
    dp[0] = 1;
    
    
    for (let i = 0; i < s.length; i++) {
      console.log(dp.length-1);
       
        for (let j = dp.length-1; j >= 0; j--) {
          
            if (s[i] === t[j]) {
                
                dp[j+1] += dp[j]
            }
        }
    }
    
    return dp[t.length];
};

var s = "rabbbbit"
var t = "rabbit"
console.log(numDistinct(s, t));