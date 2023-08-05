let first = 5;
let second = 6;

console.log(first, second);

// swap: using temp
// let temp= first;
// first= second;
// second=temp;

// swap: using destructuring
[first, second] = [second, first];

console.log(first, second);