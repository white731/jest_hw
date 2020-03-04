# jest-homework

1. clone repo
2. run `yarn`
3. implement, export and test all functions below

### Notes
`yarn run test` runs all test

```javascript
   // EXPORT ALL AS FUNCTIONS AND KEEP THE NAMES THE SAME
// ways to export
// export const methodName = (param) => {
// }
// ----or---------
// export methodName function(param){
// }
numberArray = [1,2,3,4]
// ARRAY ITERATOR METHODS
// return array with double values in array
doubleArray(numberArray) // => [2,4,6,8];  hint use map 
// return array with all even numbers
evensOnlyArray(numberArray) // => [2,4,6,8];  hint use filter 
// return array with sum of numbers
arraySum(numberArray) // => 10;  hint use reduce
// return true if every item greater than 0
allNumbersGreaterThanZero(numberArray) // => true; use every
// return true if some item greater than 0
someNumbersAreOdd(numberArray) // => true; use some
// return array double and even
evensOnlyAndDoubleArray(numberArray) // => [4,8]; // use map and filter
// find an item method return 'not found' if not found
findItem(numberArray, 1) //=> 1
sortArray(numberArray) //=> [4,3,2,1] *desc*
artists = [
  {name: 'a', likes:100},
  {name: 'c', likes:99},
  {name: 'c', likes:101}, 
]
// ARRAY ITERATOR METHODS ON Objects with name age 
// doubles likes of artist
doubleLikes(artists)
// => [
//   {name: 'a', likes:200},
//   {name: 'c', likes:198},
//   {name: 'c', likes:202},  
// ]; 
moreThan100Likes(artists)// =>[ {name: 'c', likes:101} ]; // use filter
//  return an array of strings of artist name
justArtistMoreThan100Likes(artists) //=> ['c']; // use filter
// get total number of likes fo all artists
numberOfLikes(artists) //=> 300; // get all likes
// find an item method. Returns 'not found' if not found
findObjByName(artists, 'a') // => {name: 'a', likes:200}
// returns array of artist sorted by likes
sortArtistByName(artists)
```

