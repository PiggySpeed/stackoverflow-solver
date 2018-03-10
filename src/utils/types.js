isObject = function(a) {
    console.log(typeof a);
    return (a !== null) && (a.constructor === Object);
};

isObject2 = function(a) {
    return (a !== null) && (typeof a === "object");
};

// console.log(isObject(        )); // false
console.log(isObject(    null)); // false
console.log(isObject(    true)); // false
console.log(isObject(       1)); // false
console.log(isObject(   'str')); // false
console.log(isObject(() => {})); // true
console.log(isObject(      [])); // false
console.log(isObject(new Date)); // false
console.log(isObject(      {})); // true

console.log('==========');

// console.log(isObject2(         )); // false
console.log(isObject2(    null)); // false
console.log(isObject2(    true)); // false
console.log(isObject2(       1)); // false
console.log(isObject2(   'str')); // false
console.log(isObject2(() => {})); // true
console.log(isObject2(      [])); // false
console.log(isObject2(new Date)); // false
console.log(isObject2(      {})); // true
