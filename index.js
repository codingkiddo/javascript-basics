var obj1 = {
    model: "Polo", 
    number: 0224
};
// console.log(obj1);

var str = "VINOD".startsWith("V");
// console.log(str);

// var obj2 = new Object();
// console.log(obj2);

function Person() {
    this.userName = "VINOD"
}
Object.prototype.forAll = "YES";
// console.log(Object.prototype);
// console.log(Person.__proto__.forAll);
// console.log(Person.prototype.forAll);
Person.prototype.forAll = "NO";
// console.log(Person.prototype);
// console.log(Person.prototype.forAll);



var p1 = new Person();
var p2 = new Person();
p2.__proto__.forAll = "ABCDEF";

console.log(p2.__proto__);

// console.log(p1.__proto__.forAll);
// console.log(Object.prototype);
// console.log(Person.__proto__.forAll);
// console.log(Person.prototype.forAll);


Person.__proto__.whoami = function() {
    console.log("Person.__proto__.");
}

Person.prototype.whoami = function() {
    console.log("Person.prototype.");
}

var obj3 = {};

// p1.whoami();
// obj3.whoami();

// console.log(Object.prototype.whoami);
// console.log(Person.__proto__);
// console.log(Person.prototype);
// console.log(Function.prototype);
// console.log(Object.__proto__ === Function.prototype);
// console.log(Object.prototype);
// console.log(Array.prototype.__proto__);
console.log("Object.__proto__", Object.__proto__);
console.log("Object.prototype", Object.prototype);
console.log("Function.prototype", Function.prototype);
console.log("Function.__proto__", Function.__proto__);
console.log("Function.__proto__ === Function.prototype", Function.__proto__ === Function.prototype);
console.log("p1.prototype", p1.prototype);
console.log("p1.__proto__", p1.__proto__);
console.log("p1.__proto__.prototype", p1.__proto__.prototype);
console.log("p1.__proto__.__proto__", p1.__proto__.__proto__);
console.log("Array.prototype", Array.prototype);
console.log("Array.prototype.__proto__", Array.prototype.__proto__);
console.log("Array.__proto__", Array.__proto__);

var arr = [100];
console.log("arr.prototype", arr.prototype);
console.log("arr.__proto__", arr.__proto__);
console.log("arr.__proto__.__proto__", arr.__proto__.__proto__);

console.log("Object.prototype", Object.prototype);
console.log("Array.prototype", Array.prototype);
console.log("Array.prototype.__proto__", Array.prototype.__proto__);
console.log("Array.__proto__", Array.__proto__);



console.log("Object.__proto__ === Function.prototype", Object.__proto__ === Function.prototype);//true
console.log("Object.__proto__ === Function.__proto__", Object.__proto__ === Function.__proto__);//true
console.log("Object.__proto__ === Array.prototype", Object.__proto__ === Array.prototype);//false
console.log("Object.__proto__ === Array.__proto__", Object.__proto__ === Array.__proto__);//true

console.log("Object.prototype === Function.prototype", Object.prototype === Function.prototype);//false
console.log("Object.prototype === Array.prototype", Object.prototype === Array.prototype);//false
console.log("Array.prototype.__proto__ === Object.prototype", Array.prototype.__proto__ === Object.prototype);//true
console.log("Function.prototype.__proto__ === Object.prototype", Function.prototype.__proto__ === Object.prototype);//true

// console.log(Object.__proto__ === Array.prototype);
// console.log(obj1.__proto__);
// console.log(Object.prototype.constructor.prototype);
// console.log(Person.prototype.constructor.prototype.constructor.prototype.constructor);

// Person.prototype.constructor.prototype.constructor.prototype.id = 123;
// console.log(Person.prototype);
// console.log(Person.userName);
// console.log(Person.id);
// console.log(Person.prototype.id);

// p1.id = 100;
// console.log(p1.id);

console.log(Object.getPrototypeOf(p1));
console.log(Object.getPrototypeOf(p1.__proto__));
console.log(Object.getPrototypeOf(arr));
console.log(Object.getPrototypeOf(arr.__proto__));
console.log(Object.getPrototypeOf(Array.prototype));
console.log(Object.getPrototypeOf(Array.__proto__));
console.log(Object.getPrototypeOf(Function.prototype));
console.log(Object.getPrototypeOf(Function.__proto__));
console.log(Object.getPrototypeOf(Object.prototype));
console.log(Object.getPrototypeOf(Object.__proto__));

// Object.prototype.count=1;

// var obj2 = new Object();
// console.log(obj2);

// console.log(obj1.count);