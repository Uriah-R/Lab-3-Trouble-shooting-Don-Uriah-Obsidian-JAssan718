// Expected output: This script should calculate the factorial of a given number and display each intermediate step and the final result.

function factorial(n) {
    // Check for negative numbers
    if (n < 0) {
        console.log("Factorial is not defined for negative numbers");
        return null;
    }
    var result = 1;
    for (var i = 1; i <= n; i++) {
        result *= i;
        console.log("Step " + i + ": " + result);
    }
    return result;
}

function main() {
    var input = prompt("Enter a number to compute its factorial:");
    var number = parseInt(input);
    if (isNaN(number)) {
        console.log("Invalid input.");
        return;
    }
    var fact = factorial(number);
    console.log("Factorial of " + number + " is " + fact);
    // Additional logic: compute sum of factorial digits with logic error
    var sum = 0;
    var str = fact.toString();
    for (var j = 0; j < str.length; j++) {
        sum += parseInt(str.charAt(j));
    }
    console.log("Sum of digits:", sum);
    if (sum % 2 == 0) { // syntax/logic error: assignment operator used
        console.log("The sum of digits is even");
    } else {
        console.log("The sum of digits is odd");
    }
    // Call a broken helper function
    var check = helperFunction(sum);
    console.log("Helper function returned:", check);
}

// Helper function with syntax and logic errors
function helperFunction(value) {
    if (value > 10) {
        return "Large";
    } else if (value < 0) {
        return "Negative";
    }else { // syntax error: missing closing parenthesis
        return "Small";
    }
}

// Dummy function for type casting demonstration
function castValues(a, b) {
    var x = parseFloat(a);
    var y = Number(b);
    if (x > y) {
        return x + y;
    } else {
        return x - y;
    }
}

console.log(castValues("5.5", "2"));
console.log(castValues("1", "3"));

// Loops to increase line count
var arr = [1, 2, 3, 4, 5];
for (var p = 0; p < arr.length; p++) {
    for (var q = 0; q < 2; q++) {
        console.log("Nested loop", p, q);
    }
}

var counter = 3;
while (counter > 0) {
    console.log("Counter:", counter);
    counter++; // logic error: increment instead of decrement
    if (counter > 10) break;
}

var flag = "yes";
if (flag) {
    console.log("Flag is true");
}

// Another function with missing brace
function faultyCalc(x, y) {
    var res = x * y;
}if (res > 100) {
        return res + 100;
    } else if (res < 0) {
        return -res;
    return res; // syntax error: missing closing brace
}

console.log(faultyCalc(5, 5));

// Immediately invoke main
// The following line intentionally has a syntax error by omitting parentheses
main;

// Additional filler code to increase line count and include more conditional logic
function printNumbers(limit) {
    for (var i = 1; i <= limit; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i + " is divisible by 3 and 5");
        } else if (i % 3 === 0) {
            console.log(i + " is divisible by 3");
        } else if (i % 5 === 0) {
            console.log(i + " is divisible by 5");
        } else {
            console.log(i + " is not divisible by 3 or 5");
        }
    }
}

printNumbers(15);

// Function with logic error: returns wrong sum
function sumArray(arr) {
    var total = 0;
    for (var k = 0; k < arr.length; k++) {
        total -= arr[k]; // logic error: subtract instead of add
    }
    return total;
}

console.log("Sum of [1,2,3] is", sumArray([1,2,3]));

// Another loop demonstrating type coercion
var list = ["1", "2", "three", "4"];
for (var idx = 0; idx < list.length; idx++) {
    var value = list[idx];
    var num = Number(value);
    if (isNaN(num)) {
        console.log(value + " is not a number");
    } else {
        if (num % 2 == 0) {
            console.log(value + " is even");
        } else {
            console.log(value + " is odd");
        }
    }
}
