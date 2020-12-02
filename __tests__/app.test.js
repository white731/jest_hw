import {
  // methods,
  // methods,
  originalArray,
  doubleArray,
  evensOnlyArray,
  arraySum,
  allNumbersGreaterThanZero,
  someNumbersAreOdd,
  evensOnlyAndDoubleArray,
  findItem,
  sortArray,
  sortArrayOfLetters,
  sortArrayOfLettersInReverse,
  doubleLikes
} from '../app'

// hint of look in before_each before_all
describe('originalArray Test', ()=> {
  test('originalArray should return it self', ()=>{
    expect(originalArray([1,2,3,4])).toEqual([1,2,3,4])
  })
})

describe("Double Array",()=>{
    test("double array with just normal numbers", ()=>{
      let numberArray = [1,2,3,4]
      let result = doubleArray(numberArray)
      expect(result).toEqual([2,4,6,8])
    })
})

describe("Check for evens in array",()=>{
  test("array with just normal incrementing numbers", ()=>{
    let numberArray = [1,2,3,4]
    let result = evensOnlyArray(numberArray)
    expect(result).toEqual([2,4])
  })
})

describe("Sum up an array",()=>{
  test("array with just normal incrementing numbers", ()=>{
    let numberArray = [1,2,3,4]
    let result = arraySum(numberArray)
    expect(result).toEqual(10)
  })
})

describe("Test to see if all numbers in an array are greater than 0",()=>{
  test("array with just normal incrementing numbers", ()=>{
    let numberArray = [1,2,3,4]
    let result = allNumbersGreaterThanZero(numberArray)
    expect(result).toEqual(true)
  })
})

describe("Test to see any of the numbers in an array are odd",()=>{
  test("array with just normal incrementing numbers", ()=>{
    let numberArray = [1,2,3,4]
    let result = someNumbersAreOdd(numberArray)
    expect(result).toEqual(true)
  })
})

describe("Numbers are doubled and show only even ",()=>{
  test("array with just normal incrementing numbers", ()=>{
    let numberArray = [1,2,3,4]
    let result = evensOnlyAndDoubleArray(numberArray)
    expect(result).toEqual([4,8])
  })
})

describe("Find a number within an array ",()=>{
  test("array with just normal incrementing numbers", ()=>{
    let numberArray = [1,2,3,4]
    let find_num = 1
    let result = findItem(numberArray,find_num)
    expect(result).toEqual(1)
  })

  test("try to find a number that doesn't exist in the array", ()=>{
    let numberArray = [1,2,3,4]
    let find_num = 7
    let result = findItem(numberArray,find_num)
    expect(result).toEqual(1)
  })
})

describe("Sort an array of anything",()=>{
  test("array with just normal incrementing numbers", ()=>{
    let numberArray = [1,2,3,4]
    let result = sortArray(numberArray)
    expect(result).toEqual([4,3,2,1])
  })
  test("array with random numbers", ()=>{
    let numberArray = [4,5,10,3,1,7]
    let result = sortArray(numberArray)
    expect(result).toEqual([10,7,5,4,3,1])
  })
  test("array with letters", ()=>{
    let numberArray = ["z","x","b","q"]
    let result = sortArrayOfLetters(numberArray)
    console.log(result)
    expect(result).toEqual(["b","q","x","z"])
  })
  test("array with letters going backwards", ()=>{
    let numberArray = ["z","x","b","q"]
    let result = sortArrayOfLettersInReverse(numberArray)
    console.log(result)
    expect(result).toEqual(["z","x","q","b"])
  })
})

describe("Double the likes of all artists",()=>{
  test("array of objects", ()=>{
    let artists = [
    {name: 'a', likes:100},
    {name: 'b', likes:99},
    {name: 'c', likes:101}
  ]

    let result = doubleLikes(artists)
    expect(result).toEqual([
         {name: 'a', likes:200},
         {name: 'b', likes:198},
         {name: 'c', likes:202},  
      ])
  })
})


