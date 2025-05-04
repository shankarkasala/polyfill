let array = [1, 2, 3, 4, 5];

Array.prototype.myMap = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i, this));
  }
  return result;
};

let map = array.myMap((res) => res * 2);

console.log(map);

Array.prototype.myFilter = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) result.push(this[i]);
  }
  return result;
};

let filter = array.myFilter((res) => res > 3);
console.log(filter);

Array.prototype.myReduce = function (cb, init) {
  let acc = init;
  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i], i, this) : this[i];
  }
  return acc;
};

let reduce = array.myReduce((acc, cur) => acc + cur, 0);

console.log(reduce);

let person = {
  name: 'shankar',
  age: 30,
};

function detiles(thing) {
  console.log('i am' + this.name + thing);
}

Function.prototype.myCall = function (fn, ...args) {};
