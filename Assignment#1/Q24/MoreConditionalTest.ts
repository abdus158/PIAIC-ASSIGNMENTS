// Tests for equality and inequality with strings
let string1: string = "hello";
let string2: string = "world";

console.log(string1 === string2); // False
console.log(string1 !== string2); // True

// Tests using the lowercase function
let uppercaseString: string = "HELLO";
let lowercaseString: string = "hello";

console.log(uppercaseString.toLowerCase() === lowercaseString); // True

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1: number = 10;
let num2: number = 5;

console.log(num1 === num2); // False
console.log(num1 !== num2); // True
console.log(num1 > num2); // True
console.log(num1 < num2); // False
console.log(num1 >= num2); // True
console.log(num1 <= num2); // False

// Tests using "and" and "or" operators
let PersonAge: number = 25;
let hasLicense: boolean = true;

console.log(PersonAge >= 18 && hasLicense); // True
console.log(PersonAge < 18 || !hasLicense); // False

// Test whether an item is in an array
let numbers: number[] = [1, 2, 3, 4, 5];
let searchNumber: number = 3;
for(let number of numbers){
    if(number==searchNumber){
        console.log(true); // True
    }
    else
    {
        break;
    }
}
// Test whether an item is not in an array
let fruits: string[] = ["apple", "banana", "orange"];
let searchFruit: string = "grape";
for(let fruit of fruits){
    if(fruit!=searchFruit){
        console.log(true); // True
    }
    else
    {
        break;
    }
}

