/*
We will build our own DIY object system in here.
1) Set up a memory array. Create a max length variable, we will use this to simulate a fixed length array.
2) To write a new value into our DIY object system at a specified key, we need to hash that key into an integer. Write a function that accepts a string, and returns an an integer that is representative of that string.
  2a) Convert each character of the string into a number. Check out the charCodeAt method! Then add all those numbers together
  2b) The number you got is probably going to be higher than our max memory length. Use the modulo operator to convert it into a number that's between 0 and our max memory length.
3) Let's access a value at a specified key. First, hash the key 
*/

let MAX_LENGTH = 15
let memoryArray = new Array(MAX_LENGTH)

function hashString(string) {
  let output = 0

  for (char of string) {
    output += char.charCodeAt()
  }
  
  return output % MAX_LENGTH
}

function insert(key, value) {
  memoryArray[hashString(key)] = value
}

function access(key) {
  return memoryArray[hashString(key)]
}

insert('bing', 'bang')
insert('foo', 'bar')

console.log(access('bing'));

