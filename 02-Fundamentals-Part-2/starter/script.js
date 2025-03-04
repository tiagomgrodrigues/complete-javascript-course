'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) {
    hasDriversLicense = true;
}

if (hasDriversLicense) {
    console.log("I can't drive :D");
}

// const if = 123;
*/

/*
function logger() {
    console.log('My name is Jonas!')
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');

*/


/*
// Function declaration
function calcAngel(birthYear) {
    return 2025 - birthYear
}

const age1 = calcAngel(1997);

// Function expression
const calcAge2 = function (birthYear) {
    return 2025 - birthYear;
}

const age2 = calcAge2(1997);

console.log(age1, age2)

*/

/*
// Function expression
const calcAge2 = function (birthYear) {
    return 2025 - birthYear;
}

// Arrow Function
const calcAge3 = birthYear => 2025 - birthYear;
const age3 = calcAge3(1997);
console.log(age3)

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2025 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1997, 'Tiago'));
console.log(yearsUntilRetirement(1980, 'Bob'));
*/

function cutFruitPieces(fruit) {
    return fruit * 4;
}


function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangesPieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apples and ${orangesPieces} pieces of oranges`;
    return juice;
}


console.log(fruitProcessor(2, 3));