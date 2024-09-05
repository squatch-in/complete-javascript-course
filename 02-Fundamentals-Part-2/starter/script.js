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
//     console.log("No team wins...");
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

// const friends = ["Grant", "Scott", "Soloman"];
// // adding something to an array
// const newLength = friends.push("Brennan");
// console.log(friends);
// console.log(newLength);

// friends.unshift("Shelby");
// console.log(friends);

// // removing something from an array
// friends.pop(); // last
// const popped = friends.pop();
// console.log(friends);
// console.log(popped);

// friends.shift(); //first
// friends.shift();
// console.log(friends);

// console.log(friends.indexOf("Scott")); //returns the index position

// console.log(friends.includes("Scott")); // returns a boolean
// console.log(friends.includes("Jake")); // returns a boolean

// if (friends.includes("Grant")) {
//   console.log("you have a friend name grant");
// } else {
//   console.log("you do not have a friend named grant");
// }

// const calcTip = function (bill) {
//   if (bill >= 50 && bill <= 300) {
//     return bill * 0.15;
//   } else {
//     return bill * 0.2;
//   }
// };
// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [
//   calcTip(bills[0]) + bills[0],
//   calcTip(bills[1]) + bills[1],
//   calcTip(bills[2]) + bills[2],
// ];

// console.log(tips, totals);

// const jonas = {
//   firstName: "jacob",
//   lastName: "verhulst",
//   age: 2024 - 1999,
//   job: "profesional forklift driver",
//   friends: [" Shelby", " Soloman", " Brennan ", "bob"],
//   myAge: 2024 - 1999,
//   girlfriendsAge: 2024 - 1999,
// };
// // console.log(jonas);
// // console.log(jonas.lastName);
// // console.log(jonas["lastName"]);

// // const nameKey = "Name";
// // console.log(jonas["first" + nameKey]);
// // console.log(jonas["last" + nameKey]);

// // const ageKey = "Age";
// // console.log(jonas["my" + ageKey]);
// // console.log(jonas["girlfriends" + ageKey]);

// // const intrestedIn = prompt(
// //   "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
// // );
// // console.log(jonas[intrestedIn]);
// jonas.location = "America";
// jonas["twitter"] = "@squatchin";

// // if (jonas[intrestedIn]) {
// //   console.log(jonas[intrestedIn]);
// // } else {
// //   console.log("try again");
// // }
// const numberOfFriends = Object.keys(jonas.friends).length;

// console.log(
//   jonas[`firstName`] +
//     ` has ` +
//     numberOfFriends +
//     ` friends, and his best friend is` +
//     jonas.friends[0]
// );

// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is${jonas.friends[0]}`
// );

// const jacob = {
//   firstName: "jacob",
//   lastName: "verhulst",
//   birthyear: 1999,
//   job: "profesional forklift driver",
//   friends: [" Shelby", " Soloman", " Brennan ", "bob"],
//   myAge: 2024 - 1999,
//   girlfriendsAge: 2024 - 1999,
//   hasDriversLicense: true,

//   // calcAge: function (birthYear) {
//   //   return 2024 - birthYear;
//   // },

//   // calcAge: function () {
//   //   return 2024 - this.birthyear;
//   // },

//   calcAge: function () {
//     this.age = 2024 - this.birthyear;
//     return this.age;
//   },
//   getSummery: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} drivers license.`;
//   },
// };
// console.log(jacob.getSummery());
// //   checkLicense: function () {
//     if (this.hasDriversLicense === true) {
//       return `a`;
//     } else {
//       return `no`;
//     }
//   },
// };
// console.log(jacob.calcAge());
// console.log(jacob.age);
// console.log(jacob.age);
// console.log(jacob.age);
// console.log(jacob.age);
// console.log(jacob);

// const checkLicense = function () {
//   if (jacob.hasDriversLicense === true) {
//     return "a";
//   } else {
//     return "no";
//   }
// };
// console.log(
//   `${jacob.firstName} is a ${jacob.age}-year old ${
//     jacob.job
//   }, and he has ${jacob.checkLicense()} driver's license.`
// );

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };
// // console.log(
// //   `${john.fullName} (${john.bmi}) BMI is higher than ${mark.fullName} (${mark.bmi})`
// // );
// const decision = function () {
//   if (mark.calcBMI() > john.calcBMI()) {
//     console.log(
//       `${mark.fullName}'s BMI(${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi}!)`
//     );
//   } else {
//     console.log(
//       `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi}!)`
//     );
//   }
// };

// decision();

// console.log(mark.calcBMI());
// console.log(mark.bmi);
// console.log(john.calcBMI());
// console.log(john.bmi);

//FOR LOOPS
// console.log("Lifting weights repition 1");   the same as
// console.log("Lifting weights repition 1");
// console.log("Lifting weights repition 1");
// console.log("Lifting weights repition 1");
// console.log("Lifting weights repition 1");
// console.log("Lifting weights repition 1");
// console.log("Lifting weights repition 1");
// console.log("Lifting weights repition 1");
// console.log("Lifting weights repition 1");
// console.log("Lifting weights repition 1");

//            ^
//the same as |
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repition ${rep}`);
// }
// const jacobArray = [
//   "Jacob",
//   "verhulst",
//   2024 - 1999,
//   "forklift driver",
//   ["shelby", "Brennan", "Soloman"],
// ];
// const types = [];

// for (let i = 0; i < jacobArray.length; i++) {
//   //reading from jacobArray
//   console.log(jacobArray[i]);

//   //filling an array
//   // types[i] = typeof jacobArray[i];
//   // another way to fill an array
//   types.push(typeof jacobArray[i]);
// }
// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const age = [];
// for (let i = 0; i < years.length; i++) {
//   age[i] = 2024 - years[i];
// }
// console.log(age);

// //continue and break
// for (let i = 0; i < jacobArray.length; i++) {
//   if (typeof jacobArray[i] === "number") {
//     break;
//   }
//   console.log(jacobArray[i]);
// }
// const jacobArray = [
//   "Jacob",
//   "verhulst",
//   2024 - 1999,
//   "forklift driver",
//   ["shelby", "Brennan", "Soloman"],
// ];

// for (let i = jacobArray.length - 1; i >= 0; i--) {
//   console.log(jacobArray[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`---starting exercise---${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`---Rep---${rep}`);
//   }
// }

//While loops

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`lifting Weights ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`lifting weights ${rep}`);
//   rep++;
// }

// let dice = Math.floor(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`you rolled a ${dice}`);
//   dice = Math.floor(Math.random() * 6) + 1;
//   if (dice === 6) {
//     console.log(`You rolled a ${dice}!`);
//   }
// }

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52, 125];
const tips = [];
const totals = [];
const avg = [];

const calcTip = function (bill) {
  for (let i = 0; i < bills.length; i++) {
    tips[i] = bill[i] >= 50 && bill[i] <= 300 ? bill[i] * 0.15 : bill[i] * 0.2;
    totals[i] = bills[i] + tips[i];
  }
};
calcTip(bills);
console.log(tips);
console.log(totals);

const calcAverage = function (arr) {
  for (let i = 0; i < totals.length; i++) {
    avg[i] += arr[i];
  }
};
calcAverage(totals);
console.log(avg);
