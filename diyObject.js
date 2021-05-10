/*
We will build our own DIY object system in here.
1) Set up a memory array. Create a max length variable, we will use this to simulate a fixed length array.
2) Write a function called insert that inserts new value into our memory array at a specified key.
  2a) Hash that key into an integer. Write a helper function function called hashString that accepts a string, and returns an an integer that is representative of that string.
  2b) Convert each character of the string into a number. Check out the charCodeAt method! Then add all those numbers together
  2c) The number you got is probably going to be higher than our max memory length. Use the modulo operator to convert it into a number that's between 0 and our max memory length.
  2d) Finally, we have a number that's representative of the key and within the length limits of our array length. Now just write our value into our array at the calculated index position.
3) Write a function called access that accesses a value at a specified key. First, hash the key into an integer. (You should reuse your hashString function!) Then, access the value from your memory array at that integer index.
4) BONUS ROUND: encapsulate all the functionality we just learned in a single object! hint: it should have separate keys for the memory array, the insert function, and the access function.
5) Further thinking: what happens if we hash a key and the result is the same number we already got from a different key? (This is called a key collision)
6) Recap: what are the benefits of using an object over an array? and why is our system better than just having 2 parallel arrays?
*/
