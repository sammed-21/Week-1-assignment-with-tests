/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
  let startTime = new Date().getTime();
  //   let current = date.getSeconds();
  //   console.log(date);
  let sum = 1;

  for (let i = 0; i <= n; i++) {
    sum += 1;
  }
  //   console.log(sum);
  let endTime = new Date().getTime();
  //   console.log(latest);

  var timeInSeconds = endTime - startTime / 1000;

  return timeInSeconds;
}

console.log(calculateTime(100000000));
