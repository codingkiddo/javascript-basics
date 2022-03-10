


// function foo(a) {
//     console.log(a+b);
//     b=a;
// }

// foo(2);


// console.log(eval("var b = 3;"));
// console.log(b);




// function foo() {
//     "use strict";
//     console.log(a);
// }
// var a = 2
// foo();


// function foo(str) {
//     "use strict";
//     eval(str);
//     console.log(a);
// }

// foo("var a = 2");

// var obj = {};
// function a(b,c) {}


// console.log(Object.getPrototypeOf(Math.max) == Function.prototype);

// console.log(Object.getPrototypeOf(Function.prototype) == Object.prototype);
// console.log(Object.getPrototypeOf(Array.prototype) == Object.prototype);

// console.log(Object.prototype);
// console.log(obj.__proto__);
// console.log(obj.prototype);
// console.log(obj.__proto__ === Object.prototype);

// // console.log(Object.getPrototypeOf(Object.prototype));



// var anotherObject = {
//     a: 2
// };
// // create an object linked to `anotherObject`
// var myObject = Object.create( anotherObject );
// console.log(anotherObject);
// console.log(myObject); // 2

// for (var k in anotherObject) {
//     console.log("found: " + k);
// }

// console.log("a" in myObject);

console.log(" ============================================== ");
console.log(Object);
console.log(Object.prototype);
console.log(" ============================================== ");

console.log(" ============================================== ");
console.log(Object.hasOwnProperty("a"));
console.log(Object.prototype.hasOwnProperty("a"));
console.log(" ============================================== ");

console.log(" ============================================== ");
console.log(Object.create({}));
// console.log(Object.prototype.create({}));
console.log(" ============================================== ");

console.log(" ============================================== ");
var obj = {a:100};
console.log(obj);
console.log(obj.__proto__);
console.log(obj.prototype);

console.log(Object.prototype.__proto__);
console.log(Object.prototype);
console.log(Function.prototype.__proto__);
console.log(Function.prototype);
console.log(Object.prototype == Function.prototype.__proto__);
console.log(" ============================================== ");

function hello(name) {
    console.log("Hello ", name);
}

console.log(hello.name);
console.log(hello.a);

console.log(hello.prototype);
console.log(hello.prototype.__proto__);
hello.prototype.__proto__ = obj;
console.log(hello.prototype.__proto__);
console.log(hello.a);


console.log(" ============================================== ");
function Foo() {
// ...
}
var a = new Foo();


console.log(a.length);
console.log(Function.length);
console.log(Foo.prototype);
console.log(Foo.__proto__);
console.log(Foo.prototype.__proto__);

console.log(a.prototype);
console.log(a.__proto__);
console.log(a.__proto__.__proto__);
console.log(a.__proto__ == Foo.prototype);




var obj = { a: 100 }
// console.log(obj.create({}));
console.log(obj);
console.log(obj.__proto__);
console.log(obj.prototype);
console.log(obj.__proto__ == obj.prototype);
var obj2 = new Object();
console.log(obj2.__proto__);
console.log(obj2.prototype);
console.log(obj2.__proto__ == obj2.prototype);



// Closure

function main() {
    var name = "Vinod";

    return function() {
        console.log("Hello ", name);
    }
}

var hello = main();
hello();