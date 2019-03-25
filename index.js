// IIFE is a javascript function that runs as soon as it is defined.
// The most popular use for an IIFE are
//avoid declaring variables in the global scope, create closures.

//Javascript Has FUNCTION LEVEL SCOPE

// variables declared in a anon function have a local level scope.

//here is an example of an IIFE
(function () {
    console.log("My favorite number is 23")
})();
//setting an IMMEDIATELY INVOKED FUNCTION EXPRESSION into a variable.
(favNumber = function (num = 3) {
    console.log("My favorite number is " + num);
})();

favNumber(55);


//examples of how scope works before IE6 introduced let and const.
var x = 240;

(function () {
    var x = 4000;
    console.log("local scope " + x);
})();
console.log("global scope" + x);

//using let and const

let b = 240
{
    let b = 4000;
    console.log(" local scope  " + b);
}
console.log(" global scope " + b);

//another common use of IIFE is for creating data privacy.


function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();