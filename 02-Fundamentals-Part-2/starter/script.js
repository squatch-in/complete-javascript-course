"use strict";

// let hadDriversLiscens = false;
// const passTest = true;

// if (passTest) hadDriverLiscens = true;
// if (hadDriversLiscens) console.log("i can drive");

// // const private = "audio";

// function logger () {
//     console.log("my name is jacob")
// }
// // calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges!`;
//     return juice;
// }
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const orangeJuice = fruitProcessor(0, 5);
// console.log(orangeJuice);

//Function declaration

// function calcAge1(birthYear) {
//   return 2024 - birthYear;
// }
// const age1 = calcAge1(1999);

// //function expression
// const calcAge2 = function (birthyear) {
//     return 2024 - birthyear;
// }
// const age2 = calcAge2(1999);

// console.log(age1, age2)

// function afterTaxes(yourMoney) {
//     // let bankAccount;
//     if (yourMoney >= 5000) {
//         return yourMoney * 0;
//     }else {
//         return yourMoney * 10;
//     }
// }
// const whatsLeft = afterTaxes(100);

// const camparison = function (whatsLeft) {
//     if (whatsLeft < 100) {
//         return `the gov took all your money`;
//     }else {
//         return `you are working the system`;
//     }
// }

// const comp = camparison(whatsLeft);
// console.log(comp);

//arrow function

// const calcAge3 = birthyear => 2024 - birthyear

// const age3 = calcAge3(1999);
// console.log(age3);

// console.log(yearsUntilRetirement(1999, "Jacob"));
// console.log(yearsUntilRetirement(1738, "jebadiah"));
// console.log(yearsUntilRetirement(2020, "jone"));

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

//  function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
//     return juice;
//  }
// console.log(fruitProcessor(2, 3));
//function expression

//arrow function
// const age = year => 2020 - year;
// console.log(age(2000));

// const calcAverage = (score1, score2, score3) => {
//    return (score1 + score2 + score3) / 3;
//  }

//  const checkWinner = function(avgDolphins, avgKoalas){
//      const scoreDolphins = avgDolphins;
//      const scoreKoalas = avgKoalas;

//      if (scoreDolphins >= scoreKoalas * 2) {
//          return (`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
//         }else if (scoreDolphins * 2 <= scoreKoalas) {
//          return (`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
//         }else {
//          return (`no team wins`)
//         }
//     }
//     const scoreDolphins = calcAverage(85, 54, 41);
//     const scoreKoalas = calcAverage(23, 34, 27);
//     console.log(checkWinner(scoreDolphins, scoreKoalas));

// const calcAverage = (score1, score2, score3) => {
//     return (score1 + score2 + score3) / 3;
//   }
//   const scoreDolphins = calcAverage(177, 177, 71);
//   const scoreKoalas = calcAverage(65, 11154, 49);

//   const checkWinner = function(avgDolphins, avgKoalas){
//     //   const scoreDolphins = avgDolphins;
//     //   const scoreKoalas = avgKoalas;
//       if (avgDolphins >= 2 * avgKoalas) {
//           return (`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
//          }else if (avgKoalas >= 2 * avgDolphins) {
//           return (`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
//          }else {
//           return (`No team wins...`)
//         }
//     }
//      console.log(checkWinner(scoreDolphins, scoreKoalas));

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log('No team wins...');
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);

// const friend1 = "Grant";
// const friend2 = "Scott";
// const frriend3 = "Soloman";

// const friends = ["Grant", "Scott", "Soloman"];

// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(years);

// console.log(friends[1]);
// console.log(years[years.length - 1]);

// friends[2] = "Brennan";
// console.log(friends);

// const firstName = "Jacob";
// const jacob = [firstName, "Verhulst", 2024 - 1999, "expert coder", friends];

// console.log(jacob);

//Exercise

// const calcAge = function (birthYear) {
//   return 2024 - birthYear;
// };
// const years = [1999, 1967, 1984, 1000, 0, 2020];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];

// console.log(ages);

const friends = ["Grant", "Scott", "Soloman"];

friends.push("Brennan");
console.log(friends);
