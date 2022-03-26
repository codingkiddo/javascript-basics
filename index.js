
// var name = "UNKNOWN";

// var p1 = {
//     name: "Vinod", 
//     car: {
//         name: "Polo", 
//         displayOwner: function(owner) {
//             console.log(owner.name);
//             console.log(this);
//             var engine = {
//                 name: "TSI", 
//                 displayEngineDetails: function() {
//                     console.log(this.name);
//                     console.log(this);
//                 }
//             }
//             engine.displayEngineDetails();
//             var carEngineFn = engine.displayEngineDetails.bind(this);
//             carEngineFn();
//         }
//     }, 
//     display: function() {
//         console.log(this);
//         this.car.displayOwner(this);
//     }
// }

// p1.display();
// // p1.car.displayOwner();


// // var fn = p1.display;
// // fn();
// // console.log(this);

// var name = "UNKNOWN";
// function fun() {

// }
// var p1 = {
//     name: "Vinod", 
//     car: {
//         name: "Polo", 
//         displayCar: function() {
//             var a = 1;
//             console.log(a);
//             console.log(this);
//         }
//     }, 
//     display: function() {
//         var a = 11;
//         this.car.displayCar();
//         // console.log(this);
//         // var carFn = this.car.displayCar.bind(this);
//         // carFn();
//         // this.carFn = this.car.displayCar;
//         // carFn();
//         // var carFn = this.car.displayCar;
//         // carFn();
//     }
// }

// p1.display();




// var name = "UNKNOWN";
// var p1 = {
//     name: "Vinod", 
//     car: {
//         name: "Polo", 
//         displayCar: function() {
//             var a = 1;
//             console.log(a);
//             console.log(this);
//         }
//     }, 
//     display: function() {
//         console.log(this);
//         var a = 11;
//         this.car.displayCar();
//          insideP1Display = () => {
//             console.log(this);
//             // var a = 111;
//             console.log("insideP1Display: ", a);
//             inner = () => {
//                 console.log(this.name);
//                 console.log("inner: ", a);
//             }
//             inner();
//         }
//         insideP1Display();
//     }
// }

// p1.display();


// var name = "GLOBAL"; 

// function person() {
//     var name = "Vinod"; 
    
//     function car() {
//         // var name = "Polo";

//         function engineType() {
//             // var name = "TSI Petrol"; 

//             function totalCylindersInEngine() {
//                 // var name = "4";
//                 console.log(name);
//             }

//             totalCylindersInEngine();
//             console.log(name);
//         }
//         engineType();
//         console.log(name);
//     }
//     car();
//     console.log(name);
// }

// person();




// var name = "GLOBAL"; 
// function totalCylindersInEngine() {
//     // var name = "4";
//     console.log(name);
// }

// function engineType() {
//     var name = "TSI Petrol"; 
//     totalCylindersInEngine();
//     console.log(name);
// }

// function car() {
//     var name = "Polo";    
//     engineType();
//     console.log(name);
// }

// function person() {
//     var name = "Vinod"; 
//     car();
//     console.log(name);
// }

// person();




// var name = "GLOBAL"; 

function person() {
    var name = "Vinod"; 
    return function () {
        var name = "Polo";    
        return function () {
            // var name = "TSI Petrol"; 
            return function () {
                console.log(name);
            }
        }
    }
}

var val = person()()()();
console.log(val);