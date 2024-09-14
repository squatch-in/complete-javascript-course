'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.number'));
// document.querySelector('.number').textContent = 10;
// console.log(document.querySelector('.label-score').textContent);
// document.querySelector('.score').textContent = 10;
// console.log(document.querySelector('.label-highscore').textContent);
// document.querySelector('.highscore').textContent = 15;
// document.querySelector('.guess').value = 22;
// console.log(document.querySelector('.guess').value);
let score = 20;
let highscore = 0;

let secretNumber = Math.floor(Math.random() * 20) + 1;

//event listners
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
    //When guess is correct
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Congratulations!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess < secretNumber
          ? ' Your guess was too low'
          : 'Your guess was too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You loose';
      document.querySelector('.score').textContent = 0;
    }
    //   //When guess is too low
    // } else if (guess < secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent =
    //       ' Your guess was too low';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'You loose';
    //     document.querySelector('.score').textContent = 0;
    //   }
    //   //When guess is to high
    // } else if (guess > secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent =
    //       ' Your guess was too high';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'You loose';
    //     document.querySelector('.score').textContent = 0;
    //   }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
});
