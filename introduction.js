//Day2 Data types



let numOne = 5
let numTwo = 5

console.log(numOne == numTwo)      // true

//---------------------------------------------------------

let nums = [1, 2, 3, 4]
nums[2] = 99.6

console.log(nums)  // [10, 2, 3, 4]

//-----------------------------------------------------------

//Do not compare arrays, functions, or objects. 

let numbers = [1, 2, 3, 4]

console.log(nums == numbers)  // false

let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

let userTwo = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}




console.log(userOne == userTwo) // false

//-----------------------------------------------
//const num = Math.floor(Math.random () * 21) // creates random number between 0 and 10
const num = Math.floor(Math.random () * 250)
console.log(num)

//--------------------

console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\iuhg)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')

// Pass variable

let a = 2
let b = 3
console.log(`${a} is greater than ${b}: ${a < b}`)

// String operations

let string = 'thisIsDemoString'
console.log(string.toUpperCase())     

let firstName = 'abLIH'
console.log(firstName.toUpperCase())  // ASABENEH

console.log(string.substring(2,7))    // Script

let string1 = '30 Days Of JavaScript'
console.log(string1.split())     // Changes to an array -> ["30 Days Of JavaScript"]
console.log(string1.split(' '))  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]


console.log(firstName.split())    // Change to an array - > ["Asabeneh"]
console.log(firstName.split(''))  // Split to an array at each letter ->  ["A", "s", "a", "b", "e", "n", "e", "h"]

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'
console.log(countries.split(','))  // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(', ')) //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]


console.log(string1.includes('Days'))     // true
console.log(string1.includes('days'))     // false - it is case sensitive!
console.log(string1.includes('Script'))   // true
console.log(string1.includes('script'))   // false
console.log(string1.includes('java'))     // false
console.log(string1.includes('Java'))     // true



console.log(string1.replace('JavaScript', 'Cypress')) 
console.log(string1.replace('Java', 'Cypress')) 

console.log(string.startsWith('Love'))
