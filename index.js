console.log(document);
console.log(Object);
console.log(Function);
// Function.isFunction();
Function.isFunction = function() {
    console.log("Yes !!!!");
}
console.log(Function);
Function.isFunction();
console.log(Object.prototype);
console.log(Function.prototype);
console.log(Function.prototype.prototype);
console.log(Function.prototype.__proto__);
console.log(Object.prototype.__proto__);
console.log(Function.prototype.__proto__.__proto__);
console.log(Object.constructor);
console.log(Function.constructor);

var hello = function() {
    console.log("Hello !!!!");
}

// hello.isFunction();
// var obj = new Object();
// console.log(Object.constructor);
// console.log(Object.constructor.prototype.__proto__.__proto__);
// console.log(Function.constructor.prototype.__proto__.__proto__)
// console.log(Object.prototype);
// console.log(Function.prototype.__proto__);

// class Animal {
//     static display() {
//         console.log("Display");
//     }
// }

// var Animal = /** @class */ (function () {
//     function Animal() {
//         this.name = "Vinod";
//     }
//     Animal.display = function () {
//         console.log("Display");
//     };
//     Animal.prototype.namePrint = function() {
//         console.log("Name: ", this.name);
//     }
//     return Animal;
// }());

// var a1 = new Animal();
// console.log(a1);
// a1.namePrint();
// Animal.display();
// console.log(Animal.display);
// console.log(a1.namePrint.prototype);