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

/*
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
*/

/*
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years!`)
        return retirement;
    } else {
        console.log(`${firstName} has already retired!`)
        return -1;
    }
}

console.log(yearsUntilRetirement(1997, 'Tiago'));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/

/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas)

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= (2 * avgKoalas)) {
        console.log(`Dolphins win 🏆 (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas >= (2 * avgDolphins)) {
        console.log(`Koalas win 🏆 (${avgKoalas} vs ${avgDolphins})`);
    } else {
        console.log('No team wins...')
    }
};

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(576, 111);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 31);
checkWinner(scoreDolphins, scoreKoalas)
*/

/*
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay'
console.log(friends)
//friends = ['Bob', 'Alice']

const firstName = 'Jonas'
const jonas = [firstName, 'Rodrigues', 2037 - 1991, 'Teacher', friends]
console.log(jonas)
console.log(jonas.length)

// Exercise
const calcAge = function (birthYear) {
    return 2025 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages)
*/

/*
// Add elementts
const friends = ['Michael', 'Steven', 'Peter'];
const newLenght = friends.push('Jay');
console.log(friends);
console.log("Lenght", newLenght);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped)
console.log(friends);

friends.shift(); //First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven!')
}
*/

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals)
