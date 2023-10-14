// Exercise 2.1

console.log("Exercise 2.1");

let str1 = 'Laurence';
console.log("Type of Str1 is : " , typeof(str1));
let str2 = "Svekis";
console.log("Type of Str2 is : " , typeof(str2));
let val1 = undefined;
console.log("Type of val1 is : " , typeof(val1));
let val2 = null;
console.log("Type of val2 is : " , typeof(val2));
let myNum = 1000;
console.log("Type of myNum is : " , typeof(myNum));


//Exercise 2.2

console.log("Exercise 2.2");

let Name = "Tanzeela Jabbar" ;
let Age = 24 ;
let boolean = true ;

console.log("My name is " , Name , "I am ", Age , "Years  and I can code in Javascript :" , boolean)

//Exercise 2.3
console.log("Exercise 2.3");
console.log("Pythagorean theorem");

let A = prompt("Enter a value side A ");
let B = prompt("Enter a value side B ");

let C = A**2 + B**2;
console.log("The value of side C is : ", C);


//Exercise 2.4
console.log("Exercise 2.4");

let num1 = 2;
let num2 = 3;
let num3 = 4;

console.log("Add b to a");
let add = num2 + num1;
console.log(add);

console.log("Divide a by c");
let divi = num1 / num3;
console.log(divi);

console.log("Replace the value of c with the modulus of c and b");
num3 = num3 % num2;
console.log(num3);

//Chapter Project
console.log("Chapter Project");
console.log("Miles to kiloMeters");

let miles = prompt("Enter a value in miles : ");
let km = miles * 1.60934;

console.log("The distance of", miles ," miles"  , "is equal to " , km , "Kilometers");

//BMI Calculator
console.log("BMI Calculator");
let height = prompt("Enter a height in inches : ");
let cm = height * 2.54;

let Weight = prompt("Enter a weight in pounds : ");
let kilo = Weight * 0.453592;

let BMI = cm / kilo*kilo;

console.log("The value is : " , BMI);