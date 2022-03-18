var start = Date.now();

function incrementX(obj) {
    return 1 + obj.x;
}

setTimeout(function () {
    console.log("Done with timeout !!"); 
}, 5000);

for (var i=0; i<1000000000; i++) {}

console.log(incrementX({ x: 42 }));  

var end = Date.now();

console.log("Time : ", (end-start)/1000);  