
// Part 08: getSeasonForMonth()

// Write a function called getSeasonForMonth() that accepts
// an integer as an argument and returns the season of year.
//   e.g. getSeasonForMonth(6) => 'summer'

// The function should be built to accept integer values
// of 1-12.
//
// It should also return false if the function is given
// bad input.

function getSeasonForMonth (a){
  if (a < 1 || a > 12 || typeof a !== 'number') {
    var result = false
    }
  if (a === 12 || a === 1 || a === 2){
    result = "winter"
  }
  if (a === 3 || a === 4 || a === 5){
    result = "spring"
  }
  if (a === 6 || a === 7 || a===8){
    result = "summer"
  }
  if (a === 9 || a === 10 || a === 11){
    result = "fall"
  }
  return result
}


//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert( getSeasonForMonth(1) === "winter")
console.assert( getSeasonForMonth(3) === "spring")
console.assert( getSeasonForMonth(5) === "spring")
console.assert( getSeasonForMonth(7) === "summer")
console.assert( getSeasonForMonth(9) === "fall")
console.assert( getSeasonForMonth(12) === "winter")

console.assert( getSeasonForMonth(13) === false)
console.assert( getSeasonForMonth(32) === false)
console.assert( getSeasonForMonth(0) === false)
console.assert( getSeasonForMonth("June") === false)
