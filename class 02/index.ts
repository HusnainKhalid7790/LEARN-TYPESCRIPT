//operataors

//arthematic
//-addition
let x = 2;
let y = 5;
let add = x + y;
let add1 = "x" + "y";
let add2 = "xy" + x + y;
let add3 = "xy" + add;
let add4 = x + y + "xy";
let add5 = x + y + "xy" + x;
console.log("add:", add);
console.log("add1:", add1);
console.log("add2:", add2);
console.log("add3:", add3);
console.log("add4:", add4);
console.log("add5:", add5);
//-subtraction
let subtraction = x - y;
//let subtraction1 = x - "y"; //error
//let subtraction2 = "x" - 2; //error
console.log(subtraction);
//-mult
let mult = x * y;
// let mult1
//-divison
let div = x / y;
console.log(div);
//-exponentation
let exponentation = x ** y;
console.log(exponentation);

//assignment
let n = 5;
n += 5; //n=n+5
//increment(++)/decrementoperator --,
n++;
//n=11
n--; //n=n-1
//n=10
n + 2; //12
n -= 5; //7

//comparison
n = 6;
//==(value compared)
n == 5; //false
//===(value and data type are compared)
//5=5(5=5 and number=number)//true
//not equal (!=),
n != 7;
n != 5; //true
//greater than (>),
n > 8; //7 greater than 8//false
//less than (<),
n < 8; //7 less than 8 // true

//greater than or equal(>=),
n >= 8; //7 greater then or equal to 8 //false

//greater than (<=),
n <= 7; //7 greater than or equal to 7 //true

//logical
//(and ,or not) gates

// OR (||)
// T || T=T
//F||T=T
//F||F=F

console.log(n == 5 || n == 6); //false
console.log(n == 5 || n >= 6); //true

//AND(&&)

//T&&T=T
//F&&T=F
//T&&F=F
//F&&F=F

// NOT (!)
//T=F
//F=T
console.log(!(n >= 5 && n <= 8));
//!true
// n=5//false
// n=6//false
// n=7//false
//n=8//false
//n=9//true

//conditional statment
//if (condition ){}
//else {}
let condition = "Pakistan";
let age = 25;

if (condition == "Pakistan") {
  console.log("Pakistani");
} else {
  console.log("not a pakistani");
}

//if else if
if (age <= 12) {
  console.log("child");
} else if (age >= 13 && age <= 19) {
  console.log("teenager");
} else {
  console.log("adult");
}

//odd and even

// n=6
if (n % 2 == 0) {
  console.log("even");
} else {
  console.log("odd");
}
