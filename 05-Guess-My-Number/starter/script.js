'use strict';

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.number'));
document.querySelector('.number').textContent = 10;
console.log(document.querySelector('.label-score').textContent);
document.querySelector('.score').textContent = 10;
console.log(document.querySelector('.label-highscore').textContent);
document.querySelector('.highscore').textContent = 15;
document.querySelector('.guess').value = 22;
console.log(document.querySelector('.guess').value);
