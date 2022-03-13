

// console.log(constructor.__proto__.create(null));
// console.log(constructor.prototype.create(null));
console.log(Window.prototype);
console.log(window);
console.log(constructor);
console.log(constructor.prototype.constructor.prototype.__proto__.__proto__.__proto__.constructor.__proto__.__proto__.constructor.__proto__.__proto__);
console.log(constructor == window);





console.log(Object);
console.log(Object.toString());
console.log(Object.prototype);

console.log(Object.prototype.__proto__);
console.log(Object.prototype.constructor);
console.log(Object.prototype.constructor.prototype);

console.log(Object.constructor);
console.log(Object.constructor.__proto__);
console.log(Object.constructor.__proto__.__proto__);
console.log(Object.constructor.__proto__.__proto__.constructor);
console.log(Object.constructor.prototype);
console.log(Object.constructor.prototype.prototype);




function hello() {}

var obj = {
    a: 2
};



console.log(Object.__proto__.__proto__);
console.log(obj.__proto__);
console.log(obj.prototype);

console.log(Object.__proto__.__proto__ == obj.__proto__);
console.log(Function.__proto__);
console.log(Function.prototype);
console.log(Function.prototype == Function.__proto__);
console.log(Function.prototype.__proto__.constructor);
console.log(Function.prototype.__proto__.constructor.create(null));
console.log(hello.__proto__.__proto__.__proto__);
console.log(hello.__proto__.__proto__);
console.log(hello.__proto__.constructor.__proto__.__proto__.constructor.create(null));
console.log(Function.prototype == hello.__proto__);
console.log(hello.__proto__ == Function.__proto__);





var arr = [];
console.log(Array);
console.log(Array.prototype);
console.log(Array.prototype.__proto__);

console.log(Array.prototype == arr.__proto__);
console.log(arr.__proto__.__proto__);
console.log(arr.__proto__.__proto__.__proto__);
console.log(Array.prototype.__proto__ == Object.prototype);




// console.log(Object.hasOwnProperty("a"));
// console.log(obj.hasOwnProperty("a"));



// function identify() {
//     console.log(this);
// }

// var me = {
//     name: "Vinod"
// }

// var you = {
//     name: "Kumar"
// }

// identify.apply(me);
// identify.apply(you);


// function foo() {
//     foo.count = 4; // `foo` refers to itself
//     console.log(foo.count);
// }
// foo();
// console.log("foo.count: ", foo.count);
// console.log("foo.name: ", foo.name);


// var a = 1;

// function foo() {
//     console.log( this.a );
// }

// var obj = {
//     a: 2,
//     foo: foo
// };

// foo();
// obj.foo(); // 2

