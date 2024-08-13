'use strict';

// let hadDriversLiscens = false;
// const passTest = true;

// if (passTest) hadDriverLiscens = true;
// if (hadDriversLiscens) console.log("i can drive");

// // const private = "audio";

function logger () {
    console.log("my name is jacob")
}
// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges!`;
    return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
