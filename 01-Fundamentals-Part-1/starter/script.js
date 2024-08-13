// let myCountry = ("USA");
// let myConinent = ("North America");
// let currentPopulation = (333);
// const isIsland = (false);
// let language = ('English');

// currentPopulation++; 

// console.log(currentPopulation / 2);
// console.log(currentPopulation);
// console.log(currentPopulation > 6);
// console.log(currentPopulation > 33);

// const description1 = (myCountry + 
//     " is in " + 
//     myConinent + 
//     ", and its " +
//      currentPopulation + 
//      " million people speak " +
//       language);

// console.log(description1);

// const description2 = (`${myCountry} is in ${myConinent}, and its ${currentPopulation} million people speak ${language}`);

// console.log(description2);

// if (currentPopulation > 33 ) {
//     console.log(`${myCountry} population is ${currentPopulation - 10} million above average`);
// }else {
//     console.log(`${myCountry} population is ${currentPopulation -10 } million below average`);
// }

// console.log( '9' - '5'); //4
// console.log('19' - '13' + '17'); // 23
// console.log('19' - '13' + 17); // 617
// console.log('123' < 57); // False
// console.log(5 + 6 + '4' + 9 - 4 - 2); //1143

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof javascriptIsFun);
// console.log(typeof  "Hi");
// console.log(typeof 25)

// javascriptIsFun = "yes";
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 2024;

// console.log(year);
// console.log(typeof year);

// console.log(typeof null);

// let age = 25;
// age = 26;

// const NAME = "Jacob";

// console.log(ageJacob, ageShelby)
// console.log(ageJacob * 2, ageShelby / 10, 2**3);
// // 2**3 means 2 to the power of 3

// const fisrtName = "Jacob";
// const lastName = "Verhulst";

// console.log(fisrtName + " " + lastName);

// let x = 10 + 5; // 15
// x += 10;        //25     
// // 15 = 15 + 10 = 25
// x *= 4 // 100
// x++ //101
// x-- //100
// console.log(x);


// console.log(ageJacob < ageShelby); // false // better
// // console.log(ageJacob >= 1000);
// const now = 2024
// const ageJacob = now - 1969; 
// const ageShelby = now - 1999;
// const numOfValues = 2;

// // console.log(now - 1999 < now - 2024); 

// // let x, y;
// // x = y = 25 - 10 - 5;  // x = y = 10, x = 10
// // console.log(x, y);

// const average = (ageJacob + ageShelby) / numOfValues;

// console.log(ageJacob, ageShelby, average);

/* Write your code below. Good luck! 🙂 */

// let massMark = 78;
// let heightMark = 1.69;
// let massJohn = 92;
// let heightJohn = 1.95;

// massMark = 95;
// heightMark = ;
// massJohn = 92;
// heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark); 
// const BMIJohn = massJohn / (heightJohn * heightJohn); 

// console.log(BMIMark, BMIJohn);

// let markHigherBMI = BMIMark > BMIJohn;

// console.log(markHigherBMI);


//-----------------------------------------------------------
// const massMark2 = 78;
// const heightMark2 = 1.69;
// const massJohn2 = 92;
// const heightJohn2 = 1.95;

// const BMIMark2 = massMark2 / (heightMark2 * heightMark2); 
// const BMIJohn2 = massJohn2 / (heightJohn2 * heightJohn2); 

// console.log(BMIMark2, BMIJohn2);

// let markHigherBMI2 = BMIMark2 > BMIJohn2;

// console.log(markHigherBMI2);


// const fisrtName = "Jacob";
// const job = "material Handler";
// const birthYear = 1999;
// let currentYear = 2024;

// const whoAmI = `My name is ${fisrtName} and I'm a ${currentYear - birthYear} year old ${job}.`;

// console.log(whoAmI);


// const jacob = "i'm " + fisrtName + " a " + (currentYear-birthYear) + " year old " + job + "!";
// console.log(jacob);

// const string = `Okay
// now
// this
// is
// awesome!`

// console.log(string);

// const age = 15;
// //const isOldEnough = age >= 16;

// if(age >= 16) {
//     console.log(`You can take you drivers test!.`)
// }else {
//     const yearsLeft = 16 - age;
//     console.log(`You have ${yearsLeft} years left!`)
// }

// const birthYear = 1999;
// let century;

// if (birthYear <= 2000) {
//     century = 20;
// }else {
//    century = 21; 
// }
// console.log(century);

//when an input comes in from a webpage its usually a string
//type conversion
// const inputYear = "1999";
// console.log(Number(inputYear));
// console.log (Number(inputYear) + 18);
// console.log(Number("hi"));
// console.log(String(25));

// //type coercion
// console.log("i am " + 25 + " years old");
// console.log("23" - "10" - 3);

// let n = "1" + 1;  //converts into a string because of the + operator
// n = n -1;         //converts into a string because of the - operator
// console.log(n);

// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(NaN));
// console.log(Boolean(undefined));
// console.log(Boolean({}));


// const money = 10;

// if (money) {
//     console.log("don't spend it all ;");
// }else {
//     console.log("you should get a job");
// }

// let height;


// if (height) {
//    console.log("height is defined"); 
// }else {
//     console.log("height is not defined");
// }

// const age = "18";
// if ( age === 18) console.log("you just because an adult (strict)");

// if ( age == 18) console.log("you just because an adult (loose)");

// const favorite = Number(prompt("whats your favorite number"));

// console.log(favorite);
// console.log(typeof (favorite));
// console.log(Number(favorite));

// if (favorite === 7) {
//     console.log("you chose a great number");
// }else if(favorite === 4){
//     console.log("4 is a cool number");
// }else if (favorite === 9) {
//     console.log("9 is a coole number");
// }else {
//     console.log("BOOOO");
// }

// if (favorite !== 7) {
//     console.log("why not 7");
// }

// const hasDriversLicense = true; //A
// const hasGoodVision = true; //B
// const isTired = false;

// // console.log(hasDriversLicense && hasGoodVision);
// // console.log(hasDriversLicense || hasGoodVision);
// // console.log (!hasDriversLicense && hasGoodVision);



// // if (hasDriversLicense && hasGoodVision) {
// //     console.log("Shelby is able to drive!");
// // }else {
// //     console.log("you cannot drive");
// // }



// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log("shelby is able to drive");
// }else {
//     console.log("someone else should drive");
// }
// const day = "friday";

// // switch(day) {
// //     case "monday":  //day === "monday"
// //         console.log("plan learning code");
// //         console.log("go to coding meetup");
// //         break;
// //     case "tuesday":
// //         console.log("make dinner");
// //         break;
// //     case "wednesday":
// //         console.log("learn javascript");
// //         console.log("eat a sandwitch");
// //         break;
// //     case "thursday":
// //     case "friday":
// //         console.log("write code");
// //         break;
// //     case "saterday":
// //     case "sunday":
// //         console.log("enjoy the weekend");
// //         break;
// //     default:
// //         console.log("not a valad day");
// // }

// if (day === "monday") {
//     console.log("plan learning code");
//     console.log("go to codding meetup");
// }else if (day === "tuesday") {
//     console.log("make dinner");
// }else if (day === "wednesday") {
//     console.log("learn javascript");
//     console.log("eat a sandwitch");
// }else if (day === "thursday") {
//     console.log("write code");
// }else if (day === "friday") {
//     console.log("write code");
// }else if (day === "saterday") {
//     console.log("enjoy the weekend");
// }else if (day === "sunday") {
//     console.log("enjoy the weekend");
// }else {
//     console.log("not a valid day");
// }

// if (23 > 10) {
//     const str = "23 id bigger then 10";
// }

// const age = 23;

// // age >= 18 ? console.log("i like to drink pop") :
// // console.log("i like to drink water");

// const drink = age >= 18 ? ("pop") : ("water");

// console.log(drink);

// let drink2 = age   

// console.log(`i like to drink ${age >= 18 ? ("pop") : ("water")}`);

// const hoursWorked = 39;

// if (hoursWorked === 40) {
//     console.log("you have a fully paycheck");
// } else if (hoursWorked < 40) {
//     console.log("you worked part time");
// }else {
//     console.log("get a job");
// }

// console.log(`${hoursWorked === 40 ? ("fulltime") : ("part time")} and`)


/* Write your code below. Good luck! 🙂 */
// const bill = 270;
// let tip = 1.15;
// let tip2 = 1.20;


// console.log(`The bill was ${bill}, the tip was ${bill >= 50 && bill <= 300 ? (bill * .15) : (bill * .20)}, and the total value ${bill >= 50 && bill <= 300 ? (bill * tip) : (bill* tip2)}`);

// const numNeighbors = Number(prompt("how many neighbour countries does your country have"));

// if (numNeighbors === 1) {
//     console.log("only one border")
// }else if (numNeighbors > 1) {
//     console.log("more then 1 border")
// }else {
//     console.log("no boarders")
// }

// const speaksEnglish = true;
// const isIsland = false;
// let population = 49;

// if (speaksEnglish && !isIsland && population < 50) {
//     console.log("you should like portugal")
// }else {
//     console.log("try a different country")
// }

// const language = "manderin";
// switch (language) {
//     case "chinese":
//     case "manderin":
//         console.log("most number of native speakers");
//         break;
//     case "spanish":
//         console.log("second number of speakers");
//         break
//     case "english":
//         console.log("3rd number of speakers");
//         break;
//     case "hindi":
//         console.log("4th number of speakers");
//         break;
//     case "aribic":
//         console.log("5th number of speakers");
//         break;
//     default:
//         console.log("Great language too :D");
// }

const population = 3;
const country = "jamaca"
console.log(`${country} is ${population > 33 ? "above" : "below"} average`);