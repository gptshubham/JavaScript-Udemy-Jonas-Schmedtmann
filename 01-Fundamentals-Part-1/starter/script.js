/* 
// Lec: Values and Variables:

let js = 'amazing';
console.log(40+8+23-10);


console.log("shubham");
console.log(23);

let firstName = 'Shubham';
console.log(firstName);
firstName = 'Kumar';
console.log(firstName);
firstName = 'Gupta'
console.log(firstName);

let PI = 3.1415;
console.log(PI);

let myFirstJob = 'Programmer';
let myCurrentJob = 'Developer';

let job1 = 'Programmer';
let job2 = 'Developer';

console.log(myFirstJob);
*/

/*
// Lec: Data Types:

// This is a comment.
let javascriptIsFun = true;
console.log(javascriptIsFun);

// typeof operator
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'shubham');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun)

let year;
console.log(year);
console.log(typeof year);
year = 2000;
console.log(year);
console.log(typeof year);

console.log(typeof null);
// it is a bug or an error in javaScript which they don't currect for legacy reasons.
*/

/*
// Lec: let, const and var:

let age = 90;
console.log(age);
age = 91;
console.log(age);

const birthyear = 1933;
console.log(birthyear);
// birthyear = 1983;
// const birthmonth;

var job = 'programmer';
console.log(job);
job = 'developer';
console.log(job);

lastName = 'Gupta';
console.log(lastName);
// a terrible idea as it does not create a variable in the current scope instead JS creates a property on the global object.
*/

/*
// Lec: some basic operators

// Arithmetic Operators
const currentYear = 2023;
const ageGrandMaa = currentYear - 1933;
const ageGrandPaa = currentYear - 1928;
console.log(ageGrandMaa,ageGrandPaa);

console.log(ageGrandMaa*2,ageGrandMaa/2,((ageGrandPaa-ageGrandMaa)/2)**2,ageGrandMaa+ageGrandPaa);
const firstName = 'shubham';
const lastName = 'gupta';
console.log(firstName +' ' +lastName)
console.log(true+true)
console.log(true+true+true-false);
// Assignment Operator
let x = 10+5;
console.log(x);
// compound assignment operators
x += 10;
console.log(x);
x -= 5;
console.log(x);
x *= 5;
console.log(x);
x /= 3;
console.log(x);
x **= 2;
console.log(x);
// Incrementation & Decrementation
x++;
console.log(x);
x--;
console.log(x);
let y = x++ + x++;
console.log(y)
y = x++ + ++x;
console.log(y);
// Comparision Operators
let a,b,c;
a = 10;
b = 10;
c = 20;
console.log(a > b);
console.log(a < b);
console.log(a === b);
console.log(a >= b);
console.log(a <= c);
console.log(a <= b);
console.log(a != c);    
*/

/*
// Lec: Operator Precedence

const currentYear = 2023;
const ageGrandMaa = currentYear - 1933;
const ageGrandPaa = currentYear - 1928;

console.log(currentYear-1928 > currentYear-1933);

let averageAge = (ageGrandMaa+ageGrandPaa)/2
console.log(ageGrandMaa,ageGrandPaa,averageAge)
*/

/*
// Lec: Strings and Template Literals
const firstName = 'Shubham';
const job = 'programmer';
const birthyear = 2000;
const year = 2023;

const shubh = "I'm "+ firstName + ', a '+ (year-birthyear) + ' years old '+ job + '!'
console.log(shubh);
const shubhNew = `I'm ${firstName}, a ${year-birthyear} years old ${job}!`
console.log(shubhNew)
console.log(`Just a regular string...!`)
console.log('String\n\with\n\Multiple\n\Lines')
console.log(`String
with
Multiple
Lines`)
*/

/*
// Lec: Taking Decisions : if / else statements
const age = 15;

if (age >= 18){
    console.log(`Shubham can have a driving license now 🚗`);
} else{
    const yearleft = 18-age;
    console.log(`Shubham is too young! Wait another ${yearleft} years :)`);
}

const birthyear = 2000;
let century;
if (birthyear <= 2000){
    century = 20;
} else {
    century = 21;
}
console.log(century)
*/

/*
// Lec: Type conversion and Type Coercion
// Type Conversion
const inputYear = '1991';
console.log(Number(inputYear),inputYear);
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number('shubham'));
console.log(typeof NaN);

console.log(String(23),23);
console.log(typeof String(23));
// Type Coercion
console.log('I am '+ 23 + ' years old!');
console.log('1991'+18);
console.log('23'-'10'-3);
console.log('23'+'10'+3);
console.log('23'*'10'*3);
console.log('shubham'- 23);

let n = '1' + 1;
n = n - 1;
console.log(n);
console.log(2+3+4+'5');
console.log('10'-'4'-'3'-2+'5');
*/
/*
// Lec: Truthy and Falsy Values
// Falsy Values
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(null));

console.log(Boolean('s'));
console.log(Boolean(1));
console.log(Boolean({}));
console.log(Boolean());

const money =0;
if (money){
    console.log("don't spend it all ;)")
} else{
    console.log("You should get a job!")
}

let height;
if (height){
    console.log("YAY! Height is defined!")
} else {
    console.log('Height is Undefined!')
}
bug --> having any falsy value as value here will run the else statement .
*/

/*
// Lec: Equality Operators: == vs. ===
const age = '18';
if (age === 18) console.log('You just became an adult :D (Strict)');
if (age == 18) console.log('You just became an adult :D (Loose)');

let favouriteNumber= prompt("What's Your Favourite Number?");
console.log(favouriteNumber);
console.log(typeof favouriteNumber);

if (favouriteNumber == 23) console.log("Cool! 23 is an amazing number!")

if (favouriteNumber === 23) console.log("Cool! 23 is an amazing number!")

let favouriteNumber= Number(prompt("What's Your Favourite Number?"));
console.log(favouriteNumber);
console.log(typeof favouriteNumber);
if (favouriteNumber === 23){
    console.log("Cool! 23 is an amazing number !")
} else if (favouriteNumber === 7) {
    console.log("7 is also a cool number !")
} else {
    console.log("Number is not 23 or 7 !")
}
if (favouriteNumber !== 23) console.log("Why not 23!")
*/

/*
// Lec: Logical Operators
const hasDriversLicense = true;
const hasGoodVision = true;
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision){
    console.log("Sarah is able to drive.")
} else {
    console.log("Someone else should drive..!")
}

const isTired = true;
console.log(hasDriversLicense && hasGoodVision && isTired);
console.log(hasDriversLicense && hasGoodVision || isTired);
console.log(hasDriversLicense || hasGoodVision && isTired); // Observe.

if (hasDriversLicense && hasGoodVision && !isTired){
    console.log("Sarah is able to drive.")
} else {
    console.log("Someone else should drive..!")
}
*/