// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const temperatures1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [4, -2, -6, -3, 'error', 9, 13, 37, 25, 18, 4, 5];
const temperatures3 = temperatures1.concat(temperatures2);
//numbers without 'errors'
const newTemperatures = [];
console.log(temperatures3);
//returns[3, -2, -6, -1, 9, 13, 17, 15, 14, 9, 5]

//Understand the problem
//-What is temputare amplatude; is the difference between the heighest and lowest temp. in a day
//-how to find the difference; subtract the 2 numbers
//-how to find the higest and lowest numbers in an array; use Math.min() / Math.max()
//-do we need to throw out any errors; YES
//-how to only get back numbers in an array; use !isNaN

//Breaking into sub problems
//-need to loop over the array the length number of times
//-check and get rid of any strings
//find the 2 highest numbers and store them into a seprate array
//-subtract the highest and lowest number
//-return the number

//loops through temperature array and gets rid of any errors
// for (let i = 0; i < temperatures.length; i++) {
//   if (!isNaN(temperatures[i])) {
//     newTemperatures.push(temperatures[i]);
//   }
// }
// const heighest = Math.max(...newTemperatures);
// const lowest = Math.min(...newTemperatures);

// const tempAmplatude = function (high, low) {
//   let tempA = 0;
//   tempA = low - high;
//   return tempA;
// };

// console.log(newTemperatures);
// console.log(heighest, lowest);
// console.log(tempAmplatude(heighest, lowest));

// const x = [1, 2, 3];

// const add = function (x, y, z) {
//   return x + y + z;
// };
// console.log(add(...x));

const maxNum = function (temperatures) {
  let max = temperatures[0];
  let min = temperatures[0];
  for (let i = 0; i < temperatures.length; i++) {
    const curTemp = temperatures[i];
    if (typeof curTemp !== 'number') continue;
    if (max < curTemp) max = curTemp;
    if (min > curTemp) min = curTemp;
  }
  console.log(max, min);
};
const maxCalc = maxNum(temperatures);

//Problem 2
//-Function should recieve 2 arrays of temps
//merge 2 arrays
