// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

// describe("soup",() => {
//     it("returns a string that says Aloha, Bravo, here's some soup", () => {
//         expect(soup()).toEqual("Aloha, Bravo, here's some soup!")
//      })
// })

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

describe("multBy3", () => {
    it("takes an array and returns an array with all the number multiplied by 3", () =>{
        expect(multBy3(numbersArray1)).toEqual([18, 21, 24, 27, 30])
        expect(multBy3(numbersArray2)).toEqual([72, 81, 90, 99, 108])
    })
})

//  Red- ● multBy3 › takes an array and returns an array with all the number multiplied by 3
//ReferenceError: multBy3 is not defined

// b) Create the function that makes the test pass.
 
const multBy3 = (array) => {
    return array.map(x => x * 3 )
}
console.log(multBy3(numbersArray2))
console.log(multBy3(numbersArray1))

// Green
// PASS  ./code-challenges.test.js
// multBy3
//   ✓ takes an array and returns an array with all the number multiplied by 3 (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// 1. First writing the failing test that will give me an expected failure. 
// 2. Within my test the describe method will be called multBy3 
// 3. Within my test the it method will accept an array and return an array with all the numbers multiplied by 3
// 4. The expect method will take my multBy3 function and I will pass the given array as an argument.
// 5. Finally the toEqual method will be result in [18, 21, 24, 27, 30] for numbersArray1 and [72, 81, 90, 99, 108] for numbersArray2


// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.
const num1 = 15
// Expected output: "15 is divisible by three"
const num2 = 0
// Expected output: "0 is divisible by three"
const num3 = -7
// Expected output: "-7 is not divisible by three"

describe("divideBy3", ()=>{
    it("takes a number as an argument and decides if the number is evenly divisble by three or not", () => {
        const num1 = 15
        const num2 = 0
        const num3 = -7
        expect(divideBy3(num1)).toEqual("15 is divisible by three")
        expect(divideBy3(num2)).toEqual("0 is divisible by three")
        expect(divideBy3(num3)).toEqual("-7 is not divisible by three")
    })
})

// Red- ● divideBy3 › takes a number as an argument and decides if the number is evenly divisble by three or not
//     ReferenceError: divideBy3 is not defined

// b) Create the function that makes the test pass.

const divideBy3 = (number) =>{
    if(number % 3 === 0){
        return `${number} is divisible by three`
    }else{
        return `${number} is not divisible by three`
    }
}
console.log(divideBy3(num1))
console.log(divideBy3(num2))
console.log(divideBy3(num3))


// Green - 
// PASS  ./code-challenges.test.js
//   multBy3
//     ✓ takes an array and returns an array with all the number multiplied by 3 (2 ms)
//   divideBy3
//     ✓ takes a number as an argument and decides if the number is evenly divisble by three or not (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total


// 1.First write the failing test  
// 2.The describe method will be called divideBy3
// 3.Within my test the it method will accept an number and return a number that is divisible by 3
// 4.Create a function with the same name divideBy3 that takes a number and if the number mod(% 3 === 0) 
// 5.Return number is divisible by 3
// 6. Output as expected and a green pass is verified from the logs.



// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]


describe("giveMeCaps",()=>{
    it("takes in an array of words and returns an array with all the words capitalized", () => { 
        
        expect(giveMeCaps(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(giveMeCaps(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
    })
        
})

// RED - ● giveMeCaps › takes in an array of words and returns an array with all the words capitalized
// ReferenceError: giveMeCaps is not defined


// b) Create the function that makes the test pass.

const giveMeCaps = (array) => {
    return array.map(value => value.charAt(0).toUpperCase() + value.slice(1)) 
}


console.log(giveMeCaps(randomNouns1))
console.log(giveMeCaps(randomNouns2))

//output PASS  ./code-challenges.test.js
// giveMeCaps
//   ✓ takes in an array of words and returns an array with all the words capitalized (1 ms)

// Test Suites: 1 passed, 1 total

// 1.First write the failing test  
// 2.The describe method will be called giveMeCaps
// 3.Within my test the it method will accept an array and return array with first letter capitilized
// 4.Create a function with the same name giveMeCaps that takes an array and return array with first letter capitilized
// 5. Using .map ensures I'll get an array of the same length. Using .charAt(0).toUpperCase will capitilize the first letter
// 6. Finally I will use .slice(1) and add this to my captial letter. 
// 7. Output as expected test passes and green pass is verified from the logs.


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

describe("firstVowel" , () => {
    it("takes in a string and logs the index of the first vowel" , () =>{
    expect(firstVowel(vowelTester1)).toEqual(1)
    expect(firstVowel(vowelTester2)).toEqual(0)
    expect(firstVowel(vowelTester3)).toEqual(2)
    })
})

// RED ● firstVowel › takes in a string and logs the index of the first vowel
//     ReferenceError: firstVowel is not defined


// b) Create the function that makes the test pass.

// let firstVowel = (string) => {
//     for(let i = 0; i < string.length; i ++){
//       if(string[i] === "a" ){
//         return string.indexOf("a")
//       }else if(string[i] === "e"){
//         return string.indexOf("e")
//       }else if(string[i] === "i"){
//         return string.indexOf("i")
//       }else if(string[i] === "o"){
//         return string.indexOf("o")
//       }else if(string[i] === "u"){
//         return string.indexOf("u")
//       }
//     }
// }

let firstVowel = (string) => {
    for(let i = 0; i < string.length; i ++){
      if(string[i] == "a"|| string[i] == "e"|| 
      string[i] == "i" || string[i] == 'o' || 
      string[i] == 'u' ){
        return string.indexOf(string[i])
      }
    }
}

console.log(firstVowel(vowelTester1))
console.log(firstVowel(vowelTester2))
console.log(firstVowel(vowelTester3))

//Green - PASS  ./code-challenges.test.js

// firstVowel
//   ✓ takes in a string and logs the index of the first vowel

// Test Suites: 1 passed, 1 total

// 1.First write the failing test  
// 2.The describe method will be called firstVowel
// 3.Within my test the it method will take a string and log the index of the first vowel.
// 4.Create a function with the same name firstVowel that takes a string and returns the the index of the first vowel
// 5. Using a for loop to iterate through the length of the string input. Use an if statment to check if index i is equal to a vowel.
// 6. If the string[i] contains a vowel return the index of the firstVowel.
// 7. attempted with if/else statments but refactored into 6 lines after reworking.
// 8. Output as expected test passes and green pass is verified from the logs.
