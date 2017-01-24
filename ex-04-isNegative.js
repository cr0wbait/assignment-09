
// Part 05: isNegative()

// Write a function called isNegative that will tell
// whether a number is negative or not.
function isNegative (someNum){
  if(someNum >= 0){
    return false;
  }
  if(someNum < 0){
    return true;
  }
}


//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert( isNegative(10) === false )
console.assert( isNegative(0) === false )
console.assert( isNegative(-999) === true )
