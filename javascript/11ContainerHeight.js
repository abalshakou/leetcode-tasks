/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    var resArr=[];
    var result = 0;

    for (i=0;i<height.length; i++) {
        resArr=[];

        for (j=i+1;j<height.length; j++) {
           let h = Math.min(height[i],height[j]);
           let w = j - i;
           let square = w*h;
            resArr.push(square);
     }

     if (Math.max(...resArr) > result ) {
        result = Math.max(...resArr);
     }

    }

    return result;
    
};

var height = [1,8,6,2,5,4,8,3,7];

console.log(maxArea(height))