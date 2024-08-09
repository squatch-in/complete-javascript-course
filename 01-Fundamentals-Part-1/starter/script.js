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
const inputYear = "1999";
console.log(Number(inputYear));
console.log (Number(inputYear) + 18);
console.log(Number("hi"));
console.log(String(25));

//type coercion
console.log("i am " + 25 + " years old");
console.log("23" - "10" - 3);

let n = "1" + 1;  //converts into a string because of the + operator
n = n -1;         //converts into a string because of the - operator
console.log(n);