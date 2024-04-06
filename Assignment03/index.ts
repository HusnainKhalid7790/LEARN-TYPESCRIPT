// Q1 :Declare a variable named greeting with the string value "Hello, World!" and print it.
let greeting = "Hello World!";
console.log(greeting);

// Q2 :Define two variables with integer values and calculate their sum, difference, product, and quotient.
let num1 = 5;
let num2 = 2;
console.log("addition", num1 + num2);
console.log("subtraction", num1 - num2);
console.log("multiply", num1 * num2);
console.log("division", num1 / num2);
console.log("power", num1 ** num2);
console.log("%", num1 % num2);

// Q3 :Swap the values of two variables without using a third variable.
let a = 1;
let b = 2;
console.log("a", a);
console.log("b", b);
[a, b] = [b, a];
console.log("a", a);
console.log("b", b);

// Q4 :This applies to TypeScript. Create a string variable and try changing its type.
let message: string;
//message=5; compiling error and cannot assign number to string .

// Q5: Use the modulus operator to find the remainder of two numbers.
console.log(`The reminder of ${num1} & ${num2} is ${num1 % num2}`);

// Q6 : Increment a variable's value by 1 using two different methods.
let counter = 0;
counter += 1;
counter++;
console.log(`${counter}`);

// Q7: Given three boolean variables, write expressions for AND, OR, and NOT gates.
let aa: boolean = true;
let bb: boolean = false;
let cc: boolean = true;
let AND_gate = aa && bb && cc;
let OR_gate = aa || bb || cc;
let NOT_gate = !aa;
console.log("AND gate =", AND_gate);
console.log("OR gate =", OR_gate);
console.log("NOT gate =", NOT_gate);

// Q8: Show examples of using compound assignment operators.
let num = 10;
num += 5;
console.log("+=:", num);
num -= 3;
console.log("-=:", num);
num *= 2;
console.log("*=:", num);
num /= 4;
console.log("/=:", num);

// Q9 : Write a program to check if a number is even or odd
let numx = 12;
if (numx % 2 == 0) {
  console.log(`${numx} is an even number.`);
} else {
  console.log(`${numx} is an odd number .`);
}

// Q10 : Check if a person is eligible to vote.
let age: number;
let currentyear = 2024;
let birthyear = 2004;
age = currentyear - birthyear;
if (age >= 18) {
  console.log(`Yes ,you are eligible to vote.`);
} else {
  console.log(`Sorry ,you are not eligible to vote yet .`);
}

// Q11: Assign a grade based on a numerical score.
let score: number = 40;
let grade: string;
grade =
  score >= 90
    ? "Your grade is A."
    : score >= 80
    ? " Your grade is B."
    : score >= 70
    ? " Your grade is C."
    : score >= 60
    ? " Your grade is D."
    : score >= 50
    ? " Your grade is E."
    : "Your grade is F .";
console.log(grade);

// Q12 : Find the maximum of three numbers.
let x = 24;
let y = 14;
let z = 45;
if (x > y && x > z) {
  console.log(`${x} is the graeter number`);
} else if (y > x && y > z) {
  console.log(`${y} is the graeter number`);
} else {
  console.log(`${z} is the graeter number`);
}

// Q13 : Check if a given year is a leap year.
let year: number = 2024;
let leapyear: boolean =
  year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
console.log(`${year} is ${leapyear ? `a leap year` : `not a leap year `}.`);

// Q14 : Write a program that converts temperature from Fahrenheit to Celsius
let tempcelsius;
let tempfahrenheit = 68;
tempcelsius = ((tempfahrenheit - 32) * 5) / 9;
console.log(`temperature in degree celsius is ${tempcelsius}`);

// Q15 : Check if a number is positive, negative, or zero.
let numberx = 10;
if (numberx > 0) {
  console.log(`${numberx} is a positive number .`);
} else if (numberx < 0) {
  console.log(`${numberx} is a negative number .`);
} else {
  console.log(`The number is zero `);
}

// Q16: Write a program that prints the multiplication table of a given number up to 10.
const table = 5;
console.log("5*1=", 5 * 1);
console.log("5*2=", 5 * 2);
console.log("5*3=", 5 * 3);
console.log("5*4=", 5 * 4);
console.log("5*5=", 5 * 5);
console.log("5*6=", 5 * 6);
console.log("5*7=", 5 * 7);
console.log("5*8=", 5 * 8);
console.log("5*9=", 5 * 9);
console.log("5*10=", 5 * 10);
