// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Bravo 2022"
console.log(cohort.split(""))

// a) Your answer: This will take the string cohort and using the split method will split the string into an array of individual characters.
// b) Verify and explain: Output was correct, an array made up of the cohort string characters because of the split method the string is now an array of characters.


// --------------------2) What will this log?

const greeter = (name) => {
  //return `Hello, ${name}!`
   `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: This should log Hello, LEARN Student but because this function has no return statement I should see an undefined.  
// b) Verify and explain: Result was undefined due to the missing return statement. After inserting a return statment the output is as expected. 


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

// a) Your answer: Output should be the the values of the array multBy2 with all the values multplied by 2, the array will contain the same number of elements as the original array.  

// b) Verify and explain: Output as expected is [ 8, 10, 12, 14, 16 ] which is the value multiplied by 2 and .map will return a array of the same length.


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: This will log a modified array containing only values that do not equal 0 when a modulo 2 (%2 !==0) is used.
// b) Verify and explain: As expected the output is a filtered array [ 11, 13, 15 ].


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: JavaScript should be the output
// b) Verify and explain: Expected output is JavaScript because this is logging the 0 index of the languages property which is JavaScript.


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: This will log learnStudent which is the new instance of the Learn class so it inherits Bravo and 2022. Since the string George was passed as an argument this will log student: George cohort: Bravo year 2022
// b) Verify and explain:Output was as expected because learnStudent inherits from the Learn class.
