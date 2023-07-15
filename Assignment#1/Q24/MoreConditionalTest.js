"use strict";
// Tests for equality and inequality with strings
let string1 = "hello";
let string2 = "world";
console.log(string1 === string2); // False
console.log(string1 !== string2); // True
// Tests using the lowercase function
let uppercaseString = "HELLO";
let lowercaseString = "hello";
console.log(uppercaseString.toLowerCase() === lowercaseString); // True
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1 = 10;
let num2 = 5;
console.log(num1 === num2); // False
console.log(num1 !== num2); // True
console.log(num1 > num2); // True
console.log(num1 < num2); // False
console.log(num1 >= num2); // True
console.log(num1 <= num2); // False
// Tests using "and" and "or" operators
let age = 25;
let hasLicense = true;
console.log(age >= 18 && hasLicense); // True
console.log(age < 18 || !hasLicense); // False
// Test whether an item is in an array
let numbers = [1, 2, 3, 4, 5];
let searchNumber = 3;
for (let number of numbers) {
    if (number == searchNumber) {
        console.log(true); // True
    }
    else {
        break;
    }
}
// Test whether an item is not in an array
let fruits = ["apple", "banana", "orange"];
let searchFruit = "grape";
for (let fruit of fruits) {
    if (fruit != searchFruit) {
        console.log(true); // True
    }
    else {
        break;
    }
}
