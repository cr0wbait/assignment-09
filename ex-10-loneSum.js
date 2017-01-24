
// Part 10: loneSum()

// Given 3 integer values as arguments, return their sum.
// However, if one of the values is the same as another of the values,
// it does not count towards the sum.

function loneSum (a,b,c){
  var result = (a+b+c);
  if (a === b){
  result = (c)
  }
  if (a === c){
    result = (b)
  }
  if (b === c){
    result = (a)
  }
  if (a===b&&b===c){
    result = 0
  }


  return result
}

//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert( loneSum(1,2,3) === 6)
console.assert( loneSum(11,9,5) === 25)
console.assert( loneSum(4,2,4) === 2)
console.assert( loneSum(13,8,8) === 13)
console.assert( loneSum(10,10,10) === 0)
