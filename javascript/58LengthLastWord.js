/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    
    let array = s.split(" ");
    
    array = array.filter(x => x);
  
    let last = array[array.length - 1];

    let numberLastChar = last.length;

    return numberLastChar;
 
};

var s = "Hello Worl89897d ";
console.log(lengthOfLastWord(s))