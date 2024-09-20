"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.timeLog("I am able to drive");

// const interface = "audio";
// const private = 534;
*/
/*
function logger() {
  console.log("My name is Raghav");
}
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Justice with ${apples} apples and ${oranges} oranges`;
  return juice;
}
const applejuice = fruitProcessor(10, 5);
console.log(applejuice);


// Function declaration
function calcAge1(birthYeah) {
  return 2037 - birthYeah;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
}
const age2 = calcAge2(1991);

console.log(age1, age2);

*/

/*
///////////////////////////////////////
// Arrow functions

const calcAge3 = (birthYeah) => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));

*/

/*
///////////////////////////////////////
// Functions Calling Other Functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));

*/
/*
///////////////////////////////////////
// Reviewing Functions
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
};

const yearsUntilRetirement = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));

/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
}
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

*/
/*
function average(a, b, c) {
  return (a + b + c) / 3;
}
// const calAverage = average();
// console.log(average(10, 20, 33));
let AvgDolphins = average(85, 54, 41);
let Avgkoalas = average(23, 34, 27);

function checkwinner(AvgDolphins, Avgkoalas) {
  if (AvgDolphins >= 2 * Avgkoalas) {
    return "Dolphins Wins...";
  } else if (Avgkoalas >= 2 * AvgDolphins) {
    return "Koalas Wins...";
  } else {
    return "Match Draw";
  }
}
const Winner = checkwinner(AvgDolphins, Avgkoalas);
console.log(Winner);
*/

/*
///////////////////////////////////////
// Introduction to Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ["Michel","Steven","Jay"];
console.log(friends);
const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice']

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

*/
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };
// const year = [2000, 2004, 2008, 2012];
// console.log(calcAge(year)); //It returns NaN

// const Age = [
//   calcAge(year[0]),
//   calcAge(year[1]),
//   calcAge(year[2]),
//   calcAge(year[3]),
// ];
// console.log(Age);

// const friends = ["Michel", "Steven", "Petter"];
// // Add elements
// friends.push("Jay"); //At end
// console.log(friends);
// // console.log(friends.length);
// friends.unshift("john"); //at Starting
// console.log(friends);

// // Remove element
// console.log(friends.pop());
// console.log(friends);
// console.shift(friends);
// console.log(friends);

// Array Challenge
/*
function tip(Bill) {
  if (Bill >= 50 && Bill <= 300) {
    return Bill * 0.15;
  } else {
    return Bill * 0.2;
  }
}

const Bills = [125, 555, 44];

const totalBill = [
  `Tip on ${Bills[0]} is ${tip(Bills[0])} and total bill is ${
    Bills[0] + tip(Bills[0])
  }`,
  `Tip on ${Bills[1]} is ${tip(Bills[1])} and total bill is ${
    Bills[1] + tip(Bills[1])
  }`,
  `Tip on ${Bills[2]} is ${tip(Bills[2])} and total bill is ${
    Bills[2] + tip(Bills[2])
  }`,
];
console.log(totalBill);
*/
