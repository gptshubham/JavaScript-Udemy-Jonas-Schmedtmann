/*
//Lec: Values and Variables
const country = 'India';
console.log(country);

const continent = 'Asia';
console.log(continent);

let indiaPopulation = 1400;
console.log(indiaPopulation);



//Lec: Data Types
let isIsLand = true;
let language; //applying const here results in a Syntaxerror.
console.log(typeof isIsLand);
console.log(typeof indiaPopulation);
console.log(typeof country);
console.log(typeof language);


//Lec: let,const,vars
language = 'Hindi';


//Lec: some basic operators
console.log(indiaPopulation/2);

indiaPopulation++;
console.log(indiaPopulation);

let finlandPopulation = 6;
console.log(indiaPopulation>finlandPopulation);

let averagePopulation = 33;
console.log(indiaPopulation < averagePopulation);

let description = country +' ' + 'is in' + ' ' + continent + ' ' + "and it's" + ' ' +  (indiaPopulation-1) + ' ' + 'million people speak' + ' ' +  language
console.log(description)


//Lec: Strings and Template Literals
const country = 'India';
const continent = 'Asia';
let indianPopulation = 1400;
const language = 'Hindi'

let description = `${country} is in ${continent} and it's ${indianPopulation} million people speak ${language}.`
console.log(description);


//Lec: Taking Decisions: if / else Statements
let averagePopulation = 33;
const aboveAverage = indianPopulation > averagePopulation;
const belowAverage = averagePopulation - indianPopulation;

if (aboveAverage) {
    console.log(`India's population is above average`);
} else {
    console.log(`India's population is ${belowAverage} million below average.`);
}

//Lec: Type Conversion and Coercion
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);


//Lec: Assignment Operators
const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
if ( numNeighbours === 1){
    console.log('Only 1 border!');
} else if (numNeighbours > 1){
    console.log('More than 1 border');
} else {
    console.log('No borders');
}


//Lec: Logical Operators
const country = "Bharat";
const language = "english";
const population = 1144;
const isIsLand = false;
if (language==="english" && population<50  && !isIsLand){
    console.log(`You should live in ${country} :)`)
} else {
    console.log(`Find another country that meets your criteria :(`)
}
*/