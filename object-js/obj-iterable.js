

// Iterable hocce jar moddo die iterate kora jay | jar moddde symbol iterator ace
// Iterator Hocce jar maddome iterable iterate korete pare | step by step jete pare
// Iterator hocce iterable ar akta property jar maddome iterable step step iterate korte pare

// Note: Iterator is an Object or return an object

// console.dir(obj)


// const arr = [1, 2, 3, 4];
// const numIterator = arr[Symbol.iterator]();
// console.log(numIterator.next());
// console.log(numIterator.next());
// console.log(numIterator.next());
// console.log(numIterator.next());
// console.log(numIterator.next());


// Now Make an object iterator manually


myNumbers = {};

// Make it Iterable
myNumbers[Symbol.iterator] = function() {
  let n = 0;
  done = false;
  return {
    next() {
      n += 10;
      if (n == 100) {done = true};
      return {
            value: n, 
            done: done
        };
    }
  };
}


for (const num of myNumbers) {
  console.log(num)
}





