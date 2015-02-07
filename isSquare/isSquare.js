// This function should check 
// whether the integer n is the square of another integer number.
// Do not use Math.pow(n, 0.5) in your solution.

var isSquare = function(n, x){
  // Your code here
  var multiplier = x || 0;
  var square = multiplier * multiplier;
  if (square === n) {
    return true;
  } else if (square > n) {
    return false;
  } else {
    return isSquare(n, multiplier + 1);
  }
};