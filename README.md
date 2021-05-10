# Arrays and Objects
Our goal is to understand a little bit about how a computer manages memory within arrays and objects. Memory is laid out in a computer like a big tape. At any given time, the computer is focused on just a single point on the tape.

Note that these rules are all true for more classical languages like c, java, etc. Javascript doesn't always play by these rules. But you should still consider these to be "THE WAY" that memory is managed in these data structures.

https://stackoverflow.com/questions/20321047/how-are-javascript-arrays-represented-in-physical-memory

## arrays
- what all happens in the course of creating an empty array and pushing an element into it
  - allocate contiguous memory, note the beginning and the length
  - pushing a value into the array writes it into the next spot
  - when accessing an element at an index, the array does NOT have to loop or count up to that index. we just add the array's starting address onto the index, and grab the value that's located at that memory address
  - accessing an element from the array is instantaneous: it's not like the tape is so long that the focus has to physically travel a long distance.

- what happens when an array is full, and we push a new element into it?
  - we can't safely assume that the memory space right after the end of the array is empty. maybe some other process wrote something there.
  - so we have to find a whole new chunk of empty memory that's bigger than our current array. (how much bigger? generally we double the size of the array when reallocating)
  - we have to move the whole existing array over to its new home
  - finally we can extend the array

- what happens when we insert something into the middle of an existing array?
  - pick up everything after that in the array and move it over by 1
  - then insert into the empty space


## objects
- how do you think objects work under the hood, so that they achieve key-value pair functionality?
  - maybe two parallel arrays? one of keys and one of values?
  - some browsers do handle their objects this way! but it is not ideal, for reasons we can see later this afternoon
  - the problem is that if you want to access a key, you have to check keys one at a time to find the one you're after

- imagine an object that stored its info more like an array. the benefit being that an array doesn't have to loop through all its keys to get to the one we want.
  - an array stores values at an integer index, but we want to store a value associated w/ a string key. so we're going to have to convert our string key into an integer index

