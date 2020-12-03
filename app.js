// EXPORT ALL AS FUNCTIONS AND KEEP THE NAMES THE SAME

// ways to export

// export const methodName = (param) => {
// }

// ----or---------

// export methodName function(param){
// }

// Already Provied Example

export const originalArray = (arr) =>{
  return arr
}

// ARRAY ITERATOR METHODS

// numberArray = [1,2,3,4]

// return array with double values in array
export const doubleArray = (numberArray) => {
  return numberArray.map((x)=>x*2)
}// => [2,4,6,8];  hint use map 

// return array with all even numbers
export const evensOnlyArray = (numberArray) => {
    return numberArray.filter( x => x % 2 == 0)
} // => [2,4];  hint use filter 

// return array with sum of numbers
export const arraySum = (numberArray) => {
  return numberArray.reduce((x, y) => x + y)

} // => 10;  hint use reduce

// return true if every item greater than 0
export const allNumbersGreaterThanZero = (numberArray) => {
  return numberArray.every((x)=> x > 0)
}// => true; use every

// return true if one or more items in array are odd
export const someNumbersAreOdd = (numberArray) => {
  return numberArray.some(x => x % 2 != 0)

}// => true; use some

// return array double and even
export const evensOnlyAndDoubleArray = (numberArray) => {
  return numberArray.filter(x => x % 2 == 0).map(x => x*2)

} // => [4,8]; // use map and filter

// find an item method return 'not found' if not found
export const findItem = (numberArray, numToFind) => {
  return numberArray.find( x => x == numToFind ? x : "not found")
} //=> 1

// sort array desc order
export const sortArray = (numberArray) => {
  return numberArray.sort((a,b) => b-a)
} //=> [4,3,2,1] *desc*

export const sortArrayOfLetters = (numberArray) => {
  return numberArray.sort()
} //=> [4,3,2,1] *desc*

export const sortArrayOfLettersInReverse = (numberArray) => {
  return numberArray.sort().reverse()
} //=> [4,3,2,1] *desc*


// -----BONUS------
// ARRAY ITERATOR METHODS ON Objects with name age 

// artists = [
//   {name: 'a', likes:100},
//   {name: 'b', likes:99},
//   {name: 'c', likes:101}, 
// ]
// doubles likes of artist

export const doubleLikes = (artists) => {
  return artists.map((artist) => (
    {name: artist.name, likes: artist.likes * 2}
  ))  
}
// => [
//   {name: 'a', likes:200},
//   {name: 'b', likes:198},
//   {name: 'c', likes:202},  
// ]; 

// export const moreThan100Likes = (artists) => {
//   return artists.filter(artist => artist.likes < 100)
// }// =>[ {name: 'c', likes:101} ]; // use filter

// //  return an array of strings of artist name
// justArtistMoreThan100Likes(artists) //=> ['c']; // use filter

// // get total number of likes fo all artists
// numberOfLikes(artists) //=> 300; // get all likes

// // find an item method. Returns 'not found' if not found
// findObjByName(artists, 'a') // => {name: 'a', likes:200}

// // returns array of artist sorted by likes
// sortArtistByName(artists)