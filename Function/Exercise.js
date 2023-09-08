//Anonymous function
// function does not have any name 
// it execute logic there itself 
// 2 function with parameter & without return type 
var temp = function (a, b) {
    console.log("Addition is: " + (a + b));
};
temp(10, 20);
// 3 function without parameter & with return type
var temmp = function () {
    return (8 + 8);
};
var ress = temmp();
console.log("Addition:" + ress);
///Fat arrow function/ Arrow function 
// 2 function with parameter & without return type 
var m = function (a, b) {
    console.log("Addition :" + (a + b));
};
m(10, 20);
// 3 function without parameter & with return type
var n = function () {
    return 90 + 100;
};
var result = n();
console.log("Result: " + result);
