const arr = [1, 2, 3, 4, 5];

// let result = arr.reduce(
// },10)
// console.log(result);

// polyfill for .reduce
Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

// callback function
const cb = (accumulator, currentValue, index, array) => {
   return accumulator + currentValue;
};

const result = arr.myReduce(cb, 10);
console.log(result);
