/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {

    var temp = 0;

    for(let i = 0; i<prices.length; i++){
        for(let j = i+1; j<prices.length; j++){
            if (prices[i] < prices[j]) {
                temp=Math.max(temp,prices[j]-prices[i]);
              
            }
        }
    }
    return temp;
};

var prices = [7,1,5,3,6,4];

console.table(maxProfit(prices))